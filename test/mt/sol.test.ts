import { wallet } from '../provider';
import { utils } from 'ethers';
import { Tree, Hasher } from '../tree';
import { TreePure } from '../contracts/TreePure';
import { TreePureFactory } from '../contracts';
const facroryTreePure = new TreePureFactory(wallet);

import { assert } from 'chai';

function rand32(): string {
  return utils.hexlify(utils.randomBytes(32));
}

describe('Tree in Sol', () => {
  let C: TreePure;
  before(async function () {
    C = await facroryTreePure.deploy();
  });
  it('zeros', async function () {
    const tree = Tree.new(32);
    const zeros = tree.zeros.reverse();
    for (let i = 0; i < tree.zeros.length - 1; i++) {
      assert.equal(zeros[i], await C.ZEROS(i));
    }
  });
  it('ascending', async function () {
    const tree = Tree.new(32);
    for (let i = 0; i < 10; i++) {
      const leaf = rand32();
      const root00 = tree.root;
      tree.updateSingle(i, leaf);
      const root10 = tree.root;
      const witness = tree.witness(i).nodes;
      assert.isFalse(await C.checkStateInclusion(root00, i, leaf, witness));
      const root11 = await C.updateStateRoot(i, leaf, witness);
      assert.isTrue(await C.checkStateInclusion(root10, i, leaf, witness));
      assert.equal(root11, root10);
    }
  });
  it.only('gas bench: ascending', async function () {
    const tree = Tree.new(32);
    const leaf = rand32();
    const index = 21;
    tree.updateSingle(index, leaf);
    const root10 = tree.root;
    const witness = tree.witness(index).nodes;
    const res = await C.callStatic.gas_cost_checkStateInclusion(tree.root, index, leaf, witness);
    console.log('gas bench: chekcStateInclusion');
    console.log(`operation cost: ${res[1].toString()}`);
    const tx = await C.gas_cost_checkStateInclusion(tree.root, index, leaf, witness);
    const receipt = await tx.wait();
    console.log(`operation + calldata cost: ${receipt.gasUsed.toNumber() - 21000}`);
    console.log(`tx cost: ${receipt.gasUsed.toString()}`);
  });
});
