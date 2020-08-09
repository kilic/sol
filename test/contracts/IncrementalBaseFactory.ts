/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { IncrementalBase } from "./IncrementalBase";

export class IncrementalBaseFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<IncrementalBase> {
    return super.deploy(overrides || {}) as Promise<IncrementalBase>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IncrementalBase {
    return super.attach(address) as IncrementalBase;
  }
  connect(signer: Signer): IncrementalBaseFactory {
    return super.connect(signer) as IncrementalBaseFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IncrementalBase {
    return new Contract(address, _abi, signerOrProvider) as IncrementalBase;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "DEPTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SET_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "WITNESS_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "ZEROS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "leafIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x610480604052600060808181527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560a0527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060c0527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560e0527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a19344610100527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d610120527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a1968610140527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f83610160527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af610180527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101a0527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101c0527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101e0527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c610200527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb610220527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc610240527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d2610260527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f610280527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102a0527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102c0527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102e0527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e2610300527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd9610320527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e377610340527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee652610360527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef610380527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103a0527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103c0527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103e0527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e610400527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea322610420527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d735610440527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a961046052610490919060206104e1565b5060006041553480156104a257600080fd5b5060015b60208110156104d557600081602081106104bc57fe5b0154602082602081106104cb57fe5b01556001016104a6565b50603f5460405561053c565b826020810192821561050f579160200282015b8281111561050f5782518255916020019190600101906104f4565b5061051b92915061051f565b5090565b61053991905b8082111561051b5760008155600101610525565b90565b61015f8061054b6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063ae164f291161005b578063ae164f29146100a4578063d0383d68146100c1578063ebf0c717146100c9578063f178e47c146100d15761007d565b80635cdaa5f1146100825780635e71468b1461009c57806398366e351461009c575b600080fd5b61008a6100ee565b60408051918252519081900360200190f35b61008a6100f4565b61008a600480360360208110156100ba57600080fd5b50356100f9565b61008a61010d565b61008a610116565b61008a600480360360208110156100e757600080fd5b503561011c565b60415481565b602081565b6000816020811061010657fe5b0154905081565b64010000000081565b60405481565b6020816020811061010657fefea264697066735822122013114b1c72861395aaa3865141870ce2dc7adc4e30cfa8094d17a4b064215ebf64736f6c634300060a0033";
