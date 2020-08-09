import { solidityKeccak256 } from 'ethers/lib/utils';

export type Node = string;

const ZERO =
  '0x0000000000000000000000000000000000000000000000000000000000000000';

export class Hasher {
  static new(preimageType = 'uint256'): Hasher {
    return new Hasher(preimageType);
  }

  constructor(private preimageType = 'uint256') {}

  public toLeaf(data: string): string {
    return solidityKeccak256([this.preimageType], [data]);
  }

  public hash(x0: string): string {
    return solidityKeccak256(['uint256'], [x0]);
  }

  public hash2(x0: string, x1: string): string {
    return solidityKeccak256(['uint256', 'uint256'], [x0, x1]);
  }

  public zeros(depth: number): Array<Node> {
    const N = depth + 1;
    const zeros = Array(N).fill(ZERO);
    for (let i = 1; i < N; i++) {
      zeros[N - 1 - i] = this.hash2(zeros[N - i], zeros[N - i]);
    }
    return zeros;
  }
}
