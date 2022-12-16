import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap147Page } from './cap147.page';

const routes: Routes = [
  {
    path: '',
    component: Cap147Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap147PageRoutingModule {}
