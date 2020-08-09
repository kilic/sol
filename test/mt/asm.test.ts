import { wallet } from '../provider';
import { utils } from 'ethers';
import { Tree, Hasher } from '../tree';
import { Asm } from '../contracts/Asm';
import { AsmFactory } from '../contracts';
const factoryAsm = new AsmFactory(wallet);

import { assert } from 'chai';

const STATE_DEPTH: number = 32;

function rand32(): string {
  return utils.hexlify(utils.randomBytes(32));
}

describe('Asm', () => {
  let C: Asm;
  before(async function () {
    C = await factoryAsm.deploy();
  });
  it('memory', async function () {
    const tree = Tree.new(32);
    const leaf = rand32();
    const i = 111;
    tree.updateSingle(i, leaf);
    const root = tree.root;
    const witness = tree.witness(i).nodes;
    const res = await C.callStatic.calculateRootMemory(i, leaf, witness);
    assert.equal(res[0], tree.root);
    console.log('gas cost root calculation memory input', res[1].toString());
  });
  it('calldata', async function () {
    const tree = Tree.new(32);
    const leaf = rand32();
    const i = 3;
    tree.updateSingle(i, leaf);
    const root = tree.root;
    const witness = tree.witness(i).nodes;
    const res = await C.callStatic.calculateRootCalldata(i, leaf, witness);
    assert.equal(res[0], tree.root);
    console.log('gas cost root calculation calldata input', res[1].toString());
  });
  it('unrolled', async function () {
    const tree = Tree.new(32);
    const leaf = rand32();
    const i = 3;
    tree.updateSingle(i, leaf);
    const root = tree.root;
    const witness = tree.witness(i).nodes;
    const res = await C.callStatic.calculateRootUnrolled(i, leaf, witness);
    assert.equal(res[0], tree.root);
    console.log('gas cost root calculation calldata input', res[1].toString());
  });
});
