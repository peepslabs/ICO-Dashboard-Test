/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  BitFuelTokenCrowdsale,
  BitFuelTokenCrowdsaleInterface,
} from "../../contracts/BitFuelTokenCrowdsale";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenWallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_openingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_closingTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevClosingTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newClosingTime",
        type: "uint256",
      },
    ],
    name: "TimedCrowdsaleExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "closingTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOpen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "openingTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "remainingTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weiRaised",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c8038038062001c808339818101604052810190620000379190620003b5565b8181848888886001600081905550600083116200008b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200008290620005bd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f590620005df565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000171576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000168906200059b565b60405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000270576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002679062000557565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505042821015620002f8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002ef9062000535565b60405180910390fd5b8181116200033d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003349062000579565b60405180910390fd5b8160068190555080600781905550505050505050505062000894565b6000815190506200036a816200082c565b92915050565b600081519050620003818162000846565b92915050565b600081519050620003988162000860565b92915050565b600081519050620003af816200087a565b92915050565b60008060008060008060c08789031215620003cf57600080fd5b6000620003df89828a016200039e565b9650506020620003f289828a0162000370565b95505060406200040589828a0162000387565b94505060606200041889828a0162000359565b93505060806200042b89828a016200039e565b92505060a06200043e89828a016200039e565b9150509295509295509295565b60006200045a60338362000601565b9150620004678262000678565b604082019050919050565b60006200048160348362000601565b91506200048e82620006c7565b604082019050919050565b6000620004a860378362000601565b9150620004b58262000716565b604082019050919050565b6000620004cf60248362000601565b9150620004dc8262000765565b604082019050919050565b6000620004f660148362000601565b91506200050382620007b4565b602082019050919050565b60006200051d60258362000601565b91506200052a82620007dd565b604082019050919050565b6000602082019050818103600083015262000550816200044b565b9050919050565b60006020820190508181036000830152620005728162000472565b9050919050565b60006020820190508181036000830152620005948162000499565b9050919050565b60006020820190508181036000830152620005b681620004c0565b9050919050565b60006020820190508181036000830152620005d881620004e7565b9050919050565b60006020820190508181036000830152620005fa816200050e565b9050919050565b600082825260208201905092915050565b60006200061f826200064e565b9050919050565b600062000633826200064e565b9050919050565b6000620006478262000612565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f54696d656443726f776473616c653a206f70656e696e672074696d652069732060008201527f6265666f72652063757272656e742074696d6500000000000000000000000000602082015250565b7f416c6c6f77616e636543726f776473616c653a20746f6b656e2077616c6c657460008201527f20697320746865207a65726f2061646472657373000000000000000000000000602082015250565b7f54696d656443726f776473616c653a206f70656e696e672074696d652069732060008201527f6e6f74206265666f726520636c6f73696e672074696d65000000000000000000602082015250565b7f43726f776473616c653a20746f6b656e20697320746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a20726174652069732030000000000000000000000000600082015250565b7f43726f776473616c653a2077616c6c657420697320746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b620008378162000612565b81146200084357600080fd5b50565b620008518162000626565b81146200085d57600080fd5b50565b6200086b816200063a565b81146200087757600080fd5b50565b62000885816200066e565b81146200089157600080fd5b50565b6113dc80620008a46000396000f3fe6080604052600436106100a05760003560e01c8063521eb27311610064578063521eb27314610193578063b7a8807c146101be578063bf583903146101e9578063bff99c6c14610214578063ec8ac4d81461023f578063fc0c546a1461025b576100b7565b80631515bc2b146100bc5780632c4e722e146100e75780634042b66f1461011257806347535d7b1461013d5780634b6753bc14610168576100b7565b366100b7576100b56100b0610286565b61028e565b005b600080fd5b3480156100c857600080fd5b506100d16103ad565b6040516100de9190610e81565b60405180910390f35b3480156100f357600080fd5b506100fc6103b9565b6040516101099190610fb9565b60405180910390f35b34801561011e57600080fd5b506101276103c3565b6040516101349190610fb9565b60405180910390f35b34801561014957600080fd5b506101526103cd565b60405161015f9190610e81565b60405180910390f35b34801561017457600080fd5b5061017d6103e8565b60405161018a9190610fb9565b60405180910390f35b34801561019f57600080fd5b506101a86103f2565b6040516101b59190610e06565b60405180910390f35b3480156101ca57600080fd5b506101d361041c565b6040516101e09190610fb9565b60405180910390f35b3480156101f557600080fd5b506101fe610426565b60405161020b9190610fb9565b60405180910390f35b34801561022057600080fd5b5061022961059b565b6040516102369190610deb565b60405180910390f35b61025960048036038101906102549190610baf565b61028e565b005b34801561026757600080fd5b506102706105c5565b60405161027d9190610e9c565b60405180910390f35b600033905090565b600260005414156102d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cb90610f79565b60405180910390fd5b600260008190555060003490506102eb82826105ef565b60006102f682610644565b905081600454610306919061102f565b600481905550610316838261065b565b8273ffffffffffffffffffffffffffffffffffffffff16610335610286565b73ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b848460405161037c929190610fd4565b60405180910390a361038e8383610669565b61039661066d565b6103a083836106d8565b5050600160008190555050565b60006007544211905090565b6000600354905090565b6000600454905090565b600060065442101580156103e357506007544211155b905090565b6000600754905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600654905090565b60006105966104336105c5565b73ffffffffffffffffffffffffffffffffffffffff166370a08231600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161048d9190610deb565b60206040518083038186803b1580156104a557600080fd5b505afa1580156104b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104dd9190610c01565b6104e56105c5565b73ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b8152600401610541929190610e21565b60206040518083038186803b15801561055957600080fd5b505afa15801561056d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105919190610c01565b6106dc565b905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105f76103cd565b610636576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062d90610ed9565b60405180910390fd5b61064082826106f5565b5050565b6000600354826106549190611085565b9050919050565b610665828261074a565b5050565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156106d5573d6000803e3d6000fd5b50565b5050565b60008183106106eb57816106ed565b825b905092915050565b6106fd6103cd565b61073c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073390610ed9565b60405180910390fd5b6107468282610758565b5050565b6107548282610810565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bf90610f19565b60405180910390fd5b600081141561080c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080390610f99565b60405180910390fd5b5050565b610866600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683836108406105c5565b73ffffffffffffffffffffffffffffffffffffffff1661086a909392919063ffffffff16565b5050565b6108ed846323b872dd60e01b85858560405160240161088b93929190610e4a565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108f3565b50505050565b6000610955826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166109ba9092919063ffffffff16565b90506000815111156109b557808060200190518101906109759190610bd8565b6109b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ab90610f59565b60405180910390fd5b5b505050565b60606109c984846000856109d2565b90509392505050565b606082471015610a17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0e90610ef9565b60405180910390fd5b610a2085610ae6565b610a5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5690610f39565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610a889190610dd4565b60006040518083038185875af1925050503d8060008114610ac5576040519150601f19603f3d011682016040523d82523d6000602084013e610aca565b606091505b5091509150610ada828286610b09565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610b1957829050610b69565b600083511115610b2c5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b609190610eb7565b60405180910390fd5b9392505050565b600081359050610b7f81611361565b92915050565b600081519050610b9481611378565b92915050565b600081519050610ba98161138f565b92915050565b600060208284031215610bc157600080fd5b6000610bcf84828501610b70565b91505092915050565b600060208284031215610bea57600080fd5b6000610bf884828501610b85565b91505092915050565b600060208284031215610c1357600080fd5b6000610c2184828501610b9a565b91505092915050565b610c33816110f1565b82525050565b610c42816110df565b82525050565b610c5181611103565b82525050565b6000610c6282610ffd565b610c6c8185611013565b9350610c7c81856020860161115d565b80840191505092915050565b610c9181611139565b82525050565b6000610ca282611008565b610cac818561101e565b9350610cbc81856020860161115d565b610cc5816111bf565b840191505092915050565b6000610cdd60188361101e565b9150610ce8826111d0565b602082019050919050565b6000610d0060268361101e565b9150610d0b826111f9565b604082019050919050565b6000610d23602a8361101e565b9150610d2e82611248565b604082019050919050565b6000610d46601d8361101e565b9150610d5182611297565b602082019050919050565b6000610d69602a8361101e565b9150610d74826112c0565b604082019050919050565b6000610d8c601f8361101e565b9150610d978261130f565b602082019050919050565b6000610daf60198361101e565b9150610dba82611338565b602082019050919050565b610dce8161112f565b82525050565b6000610de08284610c57565b915081905092915050565b6000602082019050610e006000830184610c39565b92915050565b6000602082019050610e1b6000830184610c2a565b92915050565b6000604082019050610e366000830185610c39565b610e436020830184610c39565b9392505050565b6000606082019050610e5f6000830186610c39565b610e6c6020830185610c39565b610e796040830184610dc5565b949350505050565b6000602082019050610e966000830184610c48565b92915050565b6000602082019050610eb16000830184610c88565b92915050565b60006020820190508181036000830152610ed18184610c97565b905092915050565b60006020820190508181036000830152610ef281610cd0565b9050919050565b60006020820190508181036000830152610f1281610cf3565b9050919050565b60006020820190508181036000830152610f3281610d16565b9050919050565b60006020820190508181036000830152610f5281610d39565b9050919050565b60006020820190508181036000830152610f7281610d5c565b9050919050565b60006020820190508181036000830152610f9281610d7f565b9050919050565b60006020820190508181036000830152610fb281610da2565b9050919050565b6000602082019050610fce6000830184610dc5565b92915050565b6000604082019050610fe96000830185610dc5565b610ff66020830184610dc5565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600061103a8261112f565b91506110458361112f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561107a57611079611190565b5b828201905092915050565b60006110908261112f565b915061109b8361112f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110d4576110d3611190565b5b828202905092915050565b60006110ea8261110f565b9050919050565b60006110fc8261110f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006111448261114b565b9050919050565b60006111568261110f565b9050919050565b60005b8381101561117b578082015181840152602081019050611160565b8381111561118a576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f54696d656443726f776473616c653a206e6f74206f70656e0000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a2062656e656669636961727920697320746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f43726f776473616c653a20776569416d6f756e74206973203000000000000000600082015250565b61136a816110df565b811461137557600080fd5b50565b61138181611103565b811461138c57600080fd5b50565b6113988161112f565b81146113a357600080fd5b5056fea2646970667358221220c72dc3ca2a00fbc37d3899326a24fc4a06ab04f17ca71b2c77dd2e3932e5ba6a64736f6c63430008040033";

type BitFuelTokenCrowdsaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BitFuelTokenCrowdsaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BitFuelTokenCrowdsale__factory extends ContractFactory {
  constructor(...args: BitFuelTokenCrowdsaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rate: BigNumberish,
    _wallet: string,
    _token: string,
    _tokenWallet: string,
    _openingTime: BigNumberish,
    _closingTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BitFuelTokenCrowdsale> {
    return super.deploy(
      _rate,
      _wallet,
      _token,
      _tokenWallet,
      _openingTime,
      _closingTime,
      overrides || {}
    ) as Promise<BitFuelTokenCrowdsale>;
  }
  override getDeployTransaction(
    _rate: BigNumberish,
    _wallet: string,
    _token: string,
    _tokenWallet: string,
    _openingTime: BigNumberish,
    _closingTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rate,
      _wallet,
      _token,
      _tokenWallet,
      _openingTime,
      _closingTime,
      overrides || {}
    );
  }
  override attach(address: string): BitFuelTokenCrowdsale {
    return super.attach(address) as BitFuelTokenCrowdsale;
  }
  override connect(signer: Signer): BitFuelTokenCrowdsale__factory {
    return super.connect(signer) as BitFuelTokenCrowdsale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BitFuelTokenCrowdsaleInterface {
    return new utils.Interface(_abi) as BitFuelTokenCrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BitFuelTokenCrowdsale {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BitFuelTokenCrowdsale;
  }
}
