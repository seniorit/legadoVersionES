import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap185Page } from './cap185.page';

const routes: Routes = [
  {
    path: '',
    component: Cap185Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap185PageRoutingModule {}
