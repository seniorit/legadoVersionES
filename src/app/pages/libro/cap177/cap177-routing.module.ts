import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap177Page } from './cap177.page';

const routes: Routes = [
  {
    path: '',
    component: Cap177Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap177PageRoutingModule {}
