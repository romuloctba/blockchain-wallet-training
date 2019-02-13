import { Injectable, Inject } from '@angular/core';
import { Blockchain } from './models/blockchain';
import { Block } from './models/block';
import { Transaction } from './models/transaction';
import { BlockData } from './models/block-data';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchain: Blockchain;

  constructor(
    @Inject('GENESIS_BLOCK') GENESIS_BLOCK: Block
  ) {
    this.blockchain = new Blockchain(GENESIS_BLOCK);
  }

  list(): Block[] {
    return this.blockchain.chain;
  }

  addTransaction(transaction: Transaction): number {
    return this.blockchain.addTransactionToPending(transaction);
  }

  mine(): boolean {
    const latestBlock = this.blockchain.getLatestBlock();
    const previousHash = latestBlock.previousHash;
    const currentBlockData = new BlockData({
      transactions: this.blockchain.pendingTransactions,
      index: latestBlock.index + 1
    } as Block);
    const nonce = this.blockchain.proofOfWorkNonce(previousHash, currentBlockData);
    const hash = this.blockchain.hashBlock(previousHash, currentBlockData, nonce);
    const block = this.blockchain.newBlock(nonce, previousHash, hash);

    return this.blockchain.validateBlock(block, latestBlock);
  }
}
