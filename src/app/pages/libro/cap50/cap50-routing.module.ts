import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap50Page } from './cap50.page';

const routes: Routes = [
  {
    path: '',
    component: Cap50Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap50PageRoutingModule {}
