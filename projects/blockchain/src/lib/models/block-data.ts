import { Transaction } from './transaction';
import { Block } from './block';

export class BlockData {
  public transactions: Transaction[];
  public index: number;

  constructor(block: Block) {
    this.transactions = block.transactions;
    this.index = block.index;
  }
}
