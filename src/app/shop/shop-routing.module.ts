import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShopComponent } from './shop.component';

const routes = [
  { path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ShopRoutingModule {}
