import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'Shop', component: ShopComponent },
  { path: 'About', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routableComponents = [
  WelcomeComponent,
  ShopComponent,
  AboutComponent
];
