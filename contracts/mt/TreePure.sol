pragma solidity ^0.6.10;

import "./TreeBase.sol";

contract TreePure is TreeBase {
  function checkStateInclusion(
    bytes32 root,
    uint256 stateIndex,
    bytes32 leaf,
    bytes32[WITNESS_LENGTH] calldata witness
  ) external pure returns (bool) {
    return _checkStateInclusion(root, stateIndex, leaf, witness);
  }

  function _checkStateInclusion(
    bytes32 root,
    uint256 stateIndex,
    bytes32 leaf,
    bytes32[WITNESS_LENGTH] calldata witness
  ) internal pure returns (bool) {
    bytes32 acc = leaf;
    uint256 path = stateIndex;
    for (uint256 i = 0; i < WITNESS_LENGTH; i++) {
      if (path & 1 == 1) {
        acc = keccak256(abi.encode(witness[i], acc));
      } else {
        acc = keccak256(abi.encode(acc, witness[i]));
      }
      path >>= 1;
    }
    return root == acc;
  }

  function calculateRoot(bytes32[] calldata buf) external pure returns (bytes32) {
    return _calculateRoot(buf);
  }

  function _calculateRoot(bytes32[] memory buf) internal pure returns (bytes32) {
    uint256 n = buf.length;
    require(n & (n - 1) == 0, "RollupTree: input lenght must be power of 2");
    n >>= 1;
    while (true) {
      if (n == 0) {
        break;
      }
      for (uint256 j = 0; j < n; j++) {
        uint256 k = j << 1;
        buf[j] = keccak256(abi.encode(buf[k], buf[k + 1]));
      }
      n >>= 1;
    }
    return buf[0];
  }

  function calculateRootTruncated(bytes32[] calldata buf) external view returns (bytes32) {
    return _calculateRootTruncated(buf);
  }

  function _calculateRootTruncated(bytes32[] memory buf) internal view returns (bytes32) {
    uint256 odd = buf.length & 1;
    uint256 n = (buf.length + 1) >> 1;
    uint256 level = 0;
    while (true) {
      uint256 i = 0;
      for (; i < n - odd; i++) {
        uint256 j = i << 1;
        buf[i] = keccak256(abi.encode(buf[j], buf[j + 1]));
      }
      if (odd == 1) {
        buf[i] = keccak256(abi.encode(buf[i << 1], ZEROS[level]));
      }
      if (n == 1) {
        break;
      }
      odd = (n & 1);
      n = (n + 1) >> 1;
      level += 1;
    }
    return buf[0];
  }

  function gas_cost_checkStateInclusion(
    bytes32 root,
    uint256 stateIndex,
    bytes32 leaf,
    bytes32[WITNESS_LENGTH] calldata witness
  ) external returns (bool, uint256) {
    bool res;
    uint256 g = gasleft();
    res = _checkStateInclusion(root, stateIndex, leaf, witness);
    return (res, g - gasleft());
  }

  function gas_cost_calculateRoot(bytes32[] memory buf) public returns (bytes32, uint256) {
    bytes32 res;
    uint256 g = gasleft();
    res = _calculateRoot(buf);
    return (res, g - gasleft());
  }

  function gas_cost_calculateRootTruncated(bytes32[] memory buf) public returns (bytes32, uint256) {
    bytes32 res;
    uint256 g = gasleft();
    res = _calculateRootTruncated(buf);
    return (res, g - gasleft());
  }
}
