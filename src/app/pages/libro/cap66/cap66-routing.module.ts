import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap66Page } from './cap66.page';

const routes: Routes = [
  {
    path: '',
    component: Cap66Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap66PageRoutingModule {}
