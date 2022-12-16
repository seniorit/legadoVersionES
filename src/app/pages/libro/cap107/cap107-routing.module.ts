import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap107Page } from './cap107.page';

const routes: Routes = [
  {
    path: '',
    component: Cap107Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap107PageRoutingModule {}
