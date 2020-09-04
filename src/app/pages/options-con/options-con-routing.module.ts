import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsConPage } from './options-con.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsConPageRoutingModule {}
