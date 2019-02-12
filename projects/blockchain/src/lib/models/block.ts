import { Transaction } from './transaction';

export class Block {
  public index: number;
  public timestamp: number;
  public transactions: Transaction[];
  public nonce: string;
  public hash: string;
  public previousHash: string;

  constructor(
      index: number,
      timestamp: number,
      transactions: Transaction[],
      nonce: string,
      hash: string,
      previousHash: string
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.nonce = nonce;
    this.hash = hash;
    this.previousHash = previousHash;
  }
}
