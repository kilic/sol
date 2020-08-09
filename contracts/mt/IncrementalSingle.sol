pragma solidity ^0.6.10;

import './IncrementalBase.sol';

contract IncrementalSingle is IncrementalBase {
  function _updateSingle(bytes32 leaf) internal returns (uint256) {
    require(leafIndex < SET_SIZE - 1, 'AccountTree: left set is full ');
    bytes32 acc = leaf;
    uint256 path = leafIndex;
    bool subtreeSet = false;
    for (uint256 i = 0; i < DEPTH; i++) {
      if (path & 1 == 1) {
        acc = keccak256(abi.encode(filledSubtrees[i], acc));
      } else {
        if (!subtreeSet) {
          filledSubtrees[i] = acc;
          subtreeSet = true;
        }
        acc = keccak256(abi.encode(acc, ZEROS[i]));
      }
      path >>= 1;
    }
    root = acc;
    leafIndex += 1;
    return leafIndex - 1;
  }
}
