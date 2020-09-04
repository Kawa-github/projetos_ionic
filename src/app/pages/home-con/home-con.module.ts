import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeConPageRoutingModule } from './home-con-routing.module';

import { HomeConPage } from './home-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeConPageRoutingModule
  ],
  declarations: [HomeConPage]
})
export class HomeConPageModule {}
