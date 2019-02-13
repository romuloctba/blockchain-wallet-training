import { Component, Inject } from '@angular/core';
import { BlockchainService, Blockchain, Transaction } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blockchain-wallet-training';
  public blockchain: Blockchain;

  constructor(
    @Inject(BlockchainService)
      private blockchainService: BlockchainService
    ) {
      this.blockchain = this.blockchainService.blockchain;
  }

  onMine(): boolean {
    return this.blockchainService.mine();
  }

  onSend() {
    const blockIndex = this.blockchainService.addTransaction(
      new Transaction(20, 'eu', 'vc')
    );

    alert(`Sua transacao sera incluida no bloco #` + blockIndex);
  }
}
