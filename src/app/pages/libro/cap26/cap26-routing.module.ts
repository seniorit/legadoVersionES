import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap26Page } from './cap26.page';

const routes: Routes = [
  {
    path: '',
    component: Cap26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap26PageRoutingModule {}
