import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap87Page } from './cap87.page';

const routes: Routes = [
  {
    path: '',
    component: Cap87Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap87PageRoutingModule {}
