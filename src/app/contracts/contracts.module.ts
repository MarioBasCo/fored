import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractsPageRoutingModule } from './contracts-routing.module';

import { ContractsPage } from './contracts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ContractsPageRoutingModule
  ],
  declarations: [ContractsPage]
})
export class ContractsPageModule {}
