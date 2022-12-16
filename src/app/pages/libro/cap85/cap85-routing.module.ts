import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap85Page } from './cap85.page';

const routes: Routes = [
  {
    path: '',
    component: Cap85Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap85PageRoutingModule {}
