import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap135Page } from './cap135.page';

const routes: Routes = [
  {
    path: '',
    component: Cap135Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap135PageRoutingModule {}
