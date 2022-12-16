import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap42Page } from './cap42.page';

const routes: Routes = [
  {
    path: '',
    component: Cap42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap42PageRoutingModule {}
