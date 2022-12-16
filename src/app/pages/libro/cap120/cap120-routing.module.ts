import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap120Page } from './cap120.page';

const routes: Routes = [
  {
    path: '',
    component: Cap120Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap120PageRoutingModule {}
