import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap17Page } from './cap17.page';

const routes: Routes = [
  {
    path: '',
    component: Cap17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap17PageRoutingModule {}
