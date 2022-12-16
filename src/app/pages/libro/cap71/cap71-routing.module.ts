import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap71Page } from './cap71.page';

const routes: Routes = [
  {
    path: '',
    component: Cap71Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap71PageRoutingModule {}
