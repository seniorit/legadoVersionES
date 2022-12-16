import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap65Page } from './cap65.page';

const routes: Routes = [
  {
    path: '',
    component: Cap65Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap65PageRoutingModule {}
