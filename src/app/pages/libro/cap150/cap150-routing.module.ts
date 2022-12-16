import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap150Page } from './cap150.page';

const routes: Routes = [
  {
    path: '',
    component: Cap150Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap150PageRoutingModule {}
