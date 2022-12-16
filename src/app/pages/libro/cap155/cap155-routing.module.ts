import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap155Page } from './cap155.page';

const routes: Routes = [
  {
    path: '',
    component: Cap155Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap155PageRoutingModule {}
