import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap39Page } from './cap39.page';

const routes: Routes = [
  {
    path: '',
    component: Cap39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap39PageRoutingModule {}
