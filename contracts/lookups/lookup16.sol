pragma solidity ^0.6.10;

contract Lookup {
  mapping(uint256 => bytes32) _storage;
  uint256 index = 1;

  function lookupFieldAt0(
    bytes32 root,
    bytes32 field,
    bytes32[4] calldata witness
  ) external returns (bool, uint256) {
    uint256 g = gasleft();
    return (_lookupFieldAt0(root, field, witness), g - gasleft());
  }

  function _lookupFieldAt0(
    bytes32 root,
    bytes32 field,
    bytes32[4] memory witness
  ) internal returns (bool) {
    bytes32 z;
    assembly {
      let mem := mload(0x40)

      mstore(mem, field)
      mstore(add(mem, 32), mload(witness))
      z := keccak256(mem, 64)

      mstore(mem, z)
      mstore(add(mem, 32), mload(add(witness, 32)))
      z := keccak256(mem, 64)

      mstore(mem, z)
      mstore(add(mem, 32), mload(add(witness, 64)))
      z := keccak256(mem, 64)

      mstore(mem, z)
      mstore(add(mem, 32), mload(add(witness, 96)))
      z := keccak256(mem, 64)
    }
    return z == root;
  }

  function headerRoot(bytes32[16] memory fields) external returns (bytes32, uint256) {
    uint256 g = gasleft();
    return (_headerRoot(fields), g - gasleft());
  }

  function _headerRoot(bytes32[16] memory fields) internal pure returns (bytes32 z0) {
    assembly {
      let mem := mload(0x40)
      z0 := keccak256(fields, 64)
      let z1 := keccak256(add(fields, 64), 64)
      mstore(mem, z0)
      mstore(add(mem, 32), z1)
      z0 := keccak256(mem, 64)

      let z2 := keccak256(add(fields, 128), 64)
      let z3 := keccak256(add(fields, 192), 64)
      mstore(mem, z2)
      mstore(add(mem, 32), z3)
      z1 := keccak256(mem, 64)

      z2 := keccak256(add(fields, 256), 64)
      z3 := keccak256(add(fields, 320), 64)
      mstore(mem, z2)
      mstore(add(mem, 32), z3)
      z2 := keccak256(mem, 64)

      z3 := keccak256(add(fields, 384), 64)
      let z4 := keccak256(add(fields, 448), 64)
      mstore(mem, z3)
      mstore(add(mem, 32), z4)
      z3 := keccak256(mem, 64)

      mstore(mem, z0)
      mstore(add(mem, 32), z1)
      z0 := keccak256(mem, 64)
      mstore(mem, z2)
      mstore(add(mem, 32), z3)
      z1 := keccak256(mem, 64)
      mstore(mem, z0)
      mstore(add(mem, 32), z1)
      z0 := keccak256(mem, 64)
    }
  }
}
