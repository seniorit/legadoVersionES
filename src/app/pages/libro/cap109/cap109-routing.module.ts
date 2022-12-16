import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap109Page } from './cap109.page';

const routes: Routes = [
  {
    path: '',
    component: Cap109Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap109PageRoutingModule {}
