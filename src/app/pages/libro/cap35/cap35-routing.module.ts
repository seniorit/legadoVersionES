import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap35Page } from './cap35.page';

const routes: Routes = [
  {
    path: '',
    component: Cap35Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap35PageRoutingModule {}
