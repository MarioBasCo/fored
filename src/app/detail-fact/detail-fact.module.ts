import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFactPageRoutingModule } from './detail-fact-routing.module';

import { DetailFactPage } from './detail-fact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFactPageRoutingModule
  ],
  declarations: [DetailFactPage]
})
export class DetailFactPageModule {}
