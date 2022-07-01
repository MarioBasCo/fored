import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailFactPage } from './detail-fact.page';

const routes: Routes = [
  {
    path: '',
    component: DetailFactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailFactPageRoutingModule {}
