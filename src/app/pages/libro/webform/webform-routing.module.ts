import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebformPage } from './webform.page';

const routes: Routes = [
  {
    path: '',
    component: WebformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebformPageRoutingModule {}
