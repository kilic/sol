pragma solidity ^0.6.10;

import './IncrementalBase.sol';

contract IncrementalBatch is IncrementalBase {
  uint256 public constant BATCH_DEPTH = 10;
  uint256 public constant BATCH_SIZE = 1 << BATCH_DEPTH;

  function _updateBatch(bytes32[BATCH_SIZE] memory leafs)
    internal
    returns (uint256)
  {
    require(leafIndex < SET_SIZE - 1 - BATCH_SIZE, 'set is full');

    // Fill the subtree
    for (uint256 i = 0; i < BATCH_DEPTH; i++) {
      uint256 n = (BATCH_DEPTH - i - 1);
      for (uint256 j = 0; j < 1 << n; j++) {
        uint256 k = j << 1;
        leafs[j] = keccak256(abi.encode(leafs[k], leafs[k + 1]));
      }
    }
    bytes32 acc = leafs[0];

    // Ascend to the root
    uint256 path = leafIndex;
    bool subtreeSet = false;
    for (uint256 i = 0; i < DEPTH - BATCH_DEPTH; i++) {
      if (path & 1 == 1) {
        acc = keccak256(abi.encode(filledSubtrees[i], acc));
      } else {
        if (!subtreeSet) {
          filledSubtrees[i] = acc;
          subtreeSet = true;
        }
        acc = keccak256(abi.encode(acc, ZEROS[i + BATCH_DEPTH]));
      }
      path >>= 1;
    }
    root = acc;
    leafIndex += 1;
    return leafIndex - 1;
  }
}
