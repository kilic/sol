/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Asm } from "./Asm";

export class AsmFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Asm> {
    return super.deploy(overrides || {}) as Promise<Asm>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Asm {
    return super.attach(address) as Asm;
  }
  connect(signer: Signer): AsmFactory {
    return super.connect(signer) as AsmFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Asm {
    return new Contract(address, _abi, signerOrProvider) as Asm;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stateIndex",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32"
      },
      {
        internalType: "bytes32[32]",
        name: "witness",
        type: "bytes32[32]"
      }
    ],
    name: "calculateRootCalldata",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stateIndex",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32"
      },
      {
        internalType: "bytes32[32]",
        name: "witness",
        type: "bytes32[32]"
      }
    ],
    name: "calculateRootMemory",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stateIndex",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32"
      },
      {
        internalType: "bytes32[32]",
        name: "witness",
        type: "bytes32[32]"
      }
    ],
    name: "calculateRootUnrolled",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a58806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806347d9267014610046578063a264dc95146100bb578063e8561907146100e4575b600080fd5b6100a2600480360361044081101561005d57600080fd5b60408051610400818101835284359460208082013595820194919361044085019390928501919083908390808284376000920191909152509194506101409350505050565b6040805192835260208301919091528051918290030190f35b6100a260048036036104408110156100d257600080fd5b508035906020810135906040016101b3565b6100a260048036036104408110156100fb57600080fd5b60408051610400818101835284359460208082013595820194919361044085019390928501919083908390808284376000920191909152509194506102279350505050565b60008060005a6040519091508690869060005b61040081101561019f576001808516146001811461017c57818901516020840152838352610189565b8189015183528360208401525b506040822060019490941c939250602001610153565b5050805a9099930397509195505050505050565b60008060005a604051909150869086906044905b61044482101561021357600180851614600181146101ef5760208360208401378382526101fb565b60208383378360208301525b506040812092508360011c93506020820191506101c7565b50815a909a94039850929650505050505050565b60008060005a604051909150869086906000906001808516811490811461025957828901516020830152838252610266565b8289015182528360208301525b506040812092508360011c935060208201915060018085161460018114610298578289015160208301528382526102a5565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146102d7578289015160208301528382526102e4565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461031657828901516020830152838252610323565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461035557828901516020830152838252610362565b8289015182528360208301525b506040812092508360011c935060208201915060018085161460018114610394578289015160208301528382526103a1565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146103d3578289015160208301528382526103e0565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146104125782890151602083015283825261041f565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146104515782890151602083015283825261045e565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146104905782890151602083015283825261049d565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146104cf578289015160208301528382526104dc565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461050e5782890151602083015283825261051b565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461054d5782890151602083015283825261055a565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461058c57828901516020830152838252610599565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146105cb578289015160208301528382526105d8565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461060a57828901516020830152838252610617565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461064957828901516020830152838252610656565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461068857828901516020830152838252610695565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146106c7578289015160208301528382526106d4565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461070657828901516020830152838252610713565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461074557828901516020830152838252610752565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461078457828901516020830152838252610791565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146107c3578289015160208301528382526107d0565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146108025782890151602083015283825261080f565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146108415782890151602083015283825261084e565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146108805782890151602083015283825261088d565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146108bf578289015160208301528382526108cc565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146108fe5782890151602083015283825261090b565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461093d5782890151602083015283825261094a565b8289015182528360208301525b506040812092508360011c93506020820191506001808516146001811461097c57828901516020830152838252610989565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146109bb578289015160208301528382526109c8565b8289015182528360208301525b506040812092508360011c9350602082019150600180851614600181146109fa57828901516020830152838252610a07565b8289015182528360208301525b506040812092505050805a909993039750919550505050505056fea264697066735822122018f11feab502c4906b67751d5f33933e164e0ca9dc35c0bb23d1759ff5401be764736f6c634300060a0033";