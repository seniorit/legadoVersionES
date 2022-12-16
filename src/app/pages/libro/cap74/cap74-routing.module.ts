import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap74Page } from './cap74.page';

const routes: Routes = [
  {
    path: '',
    component: Cap74Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap74PageRoutingModule {}
