import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap116Page } from './cap116.page';

const routes: Routes = [
  {
    path: '',
    component: Cap116Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap116PageRoutingModule {}
