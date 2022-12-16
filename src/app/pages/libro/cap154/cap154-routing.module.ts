import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap154Page } from './cap154.page';

const routes: Routes = [
  {
    path: '',
    component: Cap154Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap154PageRoutingModule {}
