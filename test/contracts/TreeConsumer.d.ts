/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TreeConsumerInterface extends ethers.utils.Interface {
  functions: {
    "WITNESS_LENGTH()": FunctionFragment;
    "checkStateInclusion(bytes32,uint256,bytes32,bytes32[32])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "WITNESS_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkStateInclusion",
    values: [BytesLike, BigNumberish, BytesLike, BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "WITNESS_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkStateInclusion",
    data: BytesLike
  ): Result;

  events: {};
}

export class TreeConsumer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TreeConsumerInterface;

  functions: {
    WITNESS_LENGTH(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "WITNESS_LENGTH()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    checkStateInclusion(
      root: BytesLike,
      stateIndex: BigNumberish,
      leaf: BytesLike,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkStateInclusion(bytes32,uint256,bytes32,bytes32[32])"(
      root: BytesLike,
      stateIndex: BigNumberish,
      leaf: BytesLike,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  WITNESS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  "WITNESS_LENGTH()"(overrides?: CallOverrides): Promise<BigNumber>;

  checkStateInclusion(
    root: BytesLike,
    stateIndex: BigNumberish,
    leaf: BytesLike,
    witness: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkStateInclusion(bytes32,uint256,bytes32,bytes32[32])"(
    root: BytesLike,
    stateIndex: BigNumberish,
    leaf: BytesLike,
    witness: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    WITNESS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    "WITNESS_LENGTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    checkStateInclusion(
      root: BytesLike,
      stateIndex: BigNumberish,
      leaf: BytesLike,
      witness: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
      1: BigNumber;
    }>;

    "checkStateInclusion(bytes32,uint256,bytes32,bytes32[32])"(
      root: BytesLike,
      stateIndex: BigNumberish,
      leaf: BytesLike,
      witness: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
      1: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    WITNESS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    "WITNESS_LENGTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    checkStateInclusion(
      root: BytesLike,
      stateIndex: BigNumberish,
      leaf: BytesLike,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkStateInclusion(bytes32,uint256,bytes32,bytes32[32])"(
      root: BytesLike,
      stateIndex: BigNumberish,
      leaf: BytesLike,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WITNESS_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WITNESS_LENGTH()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkStateInclusion(
      root: BytesLike,
      stateIndex: BigNumberish,
      leaf: BytesLike,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkStateInclusion(bytes32,uint256,bytes32,bytes32[32])"(
      root: BytesLike,
      stateIndex: BigNumberish,
      leaf: BytesLike,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}