import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../tabs/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'biding',
        loadChildren: () => import('./biding/biding.module').then( m => m.BidingPageModule)
      },
      {
        path: 'my-booking',
        loadChildren: () => import('./my-booking/my-booking.module').then( m => m.MyBookingPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
