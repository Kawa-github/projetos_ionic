import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeConPage } from './home-con.page';

const routes: Routes = [
  {
    path: '',
    component: HomeConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeConPageRoutingModule {}
