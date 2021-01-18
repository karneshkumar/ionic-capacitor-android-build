import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletRechargePageRoutingModule } from './wallet-recharge-routing.module';

import { WalletRechargePage } from './wallet-recharge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletRechargePageRoutingModule
  ],
  declarations: [WalletRechargePage]
})
export class WalletRechargePageModule {}
