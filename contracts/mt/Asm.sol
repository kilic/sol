pragma solidity ^0.6.10;

contract Asm {

  function calculateRootCalldata(
    uint256 stateIndex,
    bytes32 leaf,
    bytes32[32] calldata witness
  ) external returns (bytes32, uint256) {
    uint256 g = gasleft();
    uint256 path = stateIndex;
    bytes32 acc = leaf;
    uint256 off = 68;
    assembly {
      let mem := mload(0x40)
      for {  } lt(off, 0x444) { off := add(off, 32) } {
        switch eq(and(path, 1), 1)
          case true {
            calldatacopy(mem, off, 0x20)
            mstore(add(mem, 32), acc)
          }
          default {
            calldatacopy(add(mem, 32), off, 0x20)
            mstore(mem, acc)
          }
        acc := keccak256(mem, 64)
        path := shr(1, path)
      }
    }
    return (acc, g - gasleft());
  }

  function calculateRootMemory(
    uint256 stateIndex,
    bytes32 leaf,
    bytes32[32] memory witness
  ) public returns (bytes32, uint256) {
    uint256 g = gasleft();
    uint256 path = stateIndex;
    bytes32 acc = leaf;
    assembly {
      let mem := mload(0x40)
      for { let off := 0 } lt(off, 0x400) { off := add(off, 32) } {
        switch eq(and(path, 1), 1)
          case true {
            mstore(mem, mload(add(witness, off)))
            mstore(add(mem, 32), acc)
          }
          default {
            mstore(add(mem, 32), mload(add(witness, off)))
            mstore(mem, acc)
          }
        acc := keccak256(mem, 64)
        path := shr(1, path)
      }
    }
    return (acc, g - gasleft());
  }

  function calculateRootUnrolled(
    uint256 stateIndex,
    bytes32 leaf,
    bytes32[32] memory witness
  ) public returns (bytes32, uint256) {

    uint256 g = gasleft();
    uint256 path = stateIndex;
    bytes32 acc = leaf;

    assembly {
    let off := 0
    let mem := mload(0x40)


    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

        switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

        switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

        switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

        switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)
    path := shr(1, path)
    off := add(off, 32)

    switch eq(and(path, 1), 1)
      case true {
        mstore(mem, mload(add(witness, off)))
        mstore(add(mem, 32), acc)
      }
      default {
        mstore(add(mem, 32) ,mload(add(witness, off)))
        mstore(mem, acc)
      }
    acc := keccak256(mem, 64)

    }

    return (acc, g - gasleft());
  }
}
