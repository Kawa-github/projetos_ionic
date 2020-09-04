import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormConPage } from './form-con.page';

const routes: Routes = [
  {
    path: '',
    component: FormConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormConPageRoutingModule {}
