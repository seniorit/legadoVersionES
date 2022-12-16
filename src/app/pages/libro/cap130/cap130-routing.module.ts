import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap130Page } from './cap130.page';

const routes: Routes = [
  {
    path: '',
    component: Cap130Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap130PageRoutingModule {}
