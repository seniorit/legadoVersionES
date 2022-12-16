import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap99Page } from './cap99.page';

const routes: Routes = [
  {
    path: '',
    component: Cap99Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap99PageRoutingModule {}
