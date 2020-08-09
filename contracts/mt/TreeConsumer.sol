pragma solidity ^0.6.10;

import "./TreePure.sol";

contract TreeConsumer {
  TreePure tree;
  uint256 public constant WITNESS_LENGTH = 32;

  function checkStateInclusion(
    bytes32 root,
    uint256 stateIndex,
    bytes32 leaf,
    bytes32[WITNESS_LENGTH] memory witness
  ) public returns (bool, uint256) {
    bool res;
    uint256 g = gasleft();
    res = tree.checkStateInclusion(root, stateIndex, leaf, witness);
    return (res, g - gasleft());
  }
}
