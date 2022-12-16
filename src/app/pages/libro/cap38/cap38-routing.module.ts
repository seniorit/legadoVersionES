import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap38Page } from './cap38.page';

const routes: Routes = [
  {
    path: '',
    component: Cap38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap38PageRoutingModule {}
