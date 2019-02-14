import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() block: Block;
  constructor() { }

  ngOnInit() {
  }

}
