import { Component, OnInit, Input } from '@angular/core';
import { Block, Transaction } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  @Input() chain: Block[];

  public owner: string;
  public value = 0;
  public balance: { owner: string, value: number };

  constructor() { }

  ngOnInit() {
    this.balance = { owner: this.owner, value: this.value };
  }

  getBalance(owner: string){
    this.owner = owner;
    const initial = new Transaction(0, 'system', owner);
    const transactionReducer = (transaction: Transaction, total: Transaction) =>{
      if(transaction.recipient === owner){
        total.amount = Number(transaction.amount) + Number(total.amount);
      }
      return total;
    };

    const chain = JSON.parse(JSON.stringify(this.chain));
    const transactions = chain.map((block: Block) => {
      return block.transactions.reduce(transactionReducer, initial);
    });
    const balance = transactions.reduce(transactionReducer, initial);
    this.value = balance.amount;
  }
}
