import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap178Page } from './cap178.page';

const routes: Routes = [
  {
    path: '',
    component: Cap178Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap178PageRoutingModule {}
