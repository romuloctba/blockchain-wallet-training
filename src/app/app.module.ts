import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Block, BlockchainService } from 'projects/blockchain/src/public_api';

const GenesisProvider = () => {
  return new Block(1, 12312, [], 'GENESIS', '0ae1234', '00');
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: 'GENESIS_BLOCK',
    useFactory: GenesisProvider
  },
  BlockchainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
