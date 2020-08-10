import { wallet } from '../provider';
import { utils } from 'ethers';
import { Tree, Hasher } from '../tree';
import { Lookup } from '../contracts/Lookup';
import { LookupFactory } from '../contracts';
const factoryLookup = new LookupFactory(wallet);

import { assert } from 'chai';

function rand32(): string {
  return utils.hexlify(utils.randomBytes(32));
}

const ZERO = '0x0000000000000000000000000000000000000000000000000000000000000000';

describe('Lookup 16', () => {
  let C: Lookup;
  let tree: Tree;
  let fields: string[] = [];
  before(async function () {
    C = await factoryLookup.deploy();
    tree = Tree.new(4);
    for (let i = 0; i < 16; i++) {
      fields.push(rand32());
    }
    tree.updateBatch(0, fields);
  });
  it('calculate header', async function () {
    const res = await C.callStatic.headerRoot(fields);
    assert.equal(res[0], tree.root);
    console.log('gas cost header calculation ', res[1].toString());
  });
  it('look up', async function () {
    const witness = tree.witness(0).nodes;
    const res = await C.callStatic.lookupFieldAt0(tree.root, fields[0], witness);
    assert.isTrue(res[0]);
    console.log('gas cost loop up ', res[1].toString());
  });
});
