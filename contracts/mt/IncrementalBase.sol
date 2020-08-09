pragma solidity ^0.6.10;

import './TreeBase.sol';

contract IncrementalBase is TreeBase {
  bytes32[DEPTH] public filledSubtrees;

  constructor() public {
    for (uint256 i = 1; i < DEPTH; i++) {
      filledSubtrees[i] = ZEROS[i];
    }
    root = filledSubtrees[31];
  }

  uint256 public constant SET_SIZE = 1 << DEPTH;

  bytes32 public root;
  uint256 public leafIndex = 0;

  function _checkInclusion(
    bytes32 leaf,
    uint256 _leafIndex,
    bytes32[WITNESS_LENGTH] memory witness
  ) internal view returns (bool) {
    require(_leafIndex < SET_SIZE, 'AccountTreesize');
    uint256 path = _leafIndex;
    bytes32 acc = leaf;
    for (uint256 i = 0; i < WITNESS_LENGTH; i++) {
      if (path & 1 == 1) {
        acc = keccak256(abi.encode(witness[i], acc));
      } else {
        acc = keccak256(abi.encode(acc, witness[i]));
      }
      path >>= 1;
    }
    return acc == root;
  }
}
