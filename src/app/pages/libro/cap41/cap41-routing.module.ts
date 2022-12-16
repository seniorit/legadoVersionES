import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap41Page } from './cap41.page';

const routes: Routes = [
  {
    path: '',
    component: Cap41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap41PageRoutingModule {}
