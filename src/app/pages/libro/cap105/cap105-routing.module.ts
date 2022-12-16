import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap105Page } from './cap105.page';

const routes: Routes = [
  {
    path: '',
    component: Cap105Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap105PageRoutingModule {}
