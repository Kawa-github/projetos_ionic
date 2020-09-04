import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsConPageRoutingModule } from './options-con-routing.module';

import { OptionsConPage } from './options-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsConPageRoutingModule
  ],
  declarations: [OptionsConPage]
})
export class OptionsConPageModule {}
