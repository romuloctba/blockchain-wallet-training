import { Component, Inject } from '@angular/core';
import { BlockchainService, Blockchain, Transaction } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blockchain-wallet-training';
  public imageTitle = 'title da imagem';
  public blockchain: Blockchain;
  public isValid: boolean;

  constructor(
    @Inject(BlockchainService)
      private blockchainService: BlockchainService
    ) {
      this.blockchain = this.blockchainService.blockchain;
      this.isValid = this.blockchain.isValidChain(this.blockchain);
    }

  onMine(): boolean {
    return this.blockchainService.mine();
  }

}
