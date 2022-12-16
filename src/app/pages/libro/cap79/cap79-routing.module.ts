import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap79Page } from './cap79.page';

const routes: Routes = [
  {
    path: '',
    component: Cap79Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap79PageRoutingModule {}
