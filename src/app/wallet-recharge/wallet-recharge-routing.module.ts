import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletRechargePage } from './wallet-recharge.page';

const routes: Routes = [
  {
    path: '',
    component: WalletRechargePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletRechargePageRoutingModule {}
