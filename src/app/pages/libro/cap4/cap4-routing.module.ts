import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap4Page } from './cap4.page';

const routes: Routes = [
  {
    path: '',
    component: Cap4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap4PageRoutingModule {}
