import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap58Page } from './cap58.page';

const routes: Routes = [
  {
    path: '',
    component: Cap58Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap58PageRoutingModule {}
