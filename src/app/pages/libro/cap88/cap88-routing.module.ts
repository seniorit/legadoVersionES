import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap88Page } from './cap88.page';

const routes: Routes = [
  {
    path: '',
    component: Cap88Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap88PageRoutingModule {}
