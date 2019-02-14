import { Component, OnInit, Inject } from '@angular/core';
import { BlockchainService, Blockchain } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public blockchain: Blockchain;
  constructor(
    @Inject(BlockchainService)
    private blockchainService: BlockchainService
  ) { }

  ngOnInit() {
    this.blockchain = this.blockchainService.blockchain;
  }

}
