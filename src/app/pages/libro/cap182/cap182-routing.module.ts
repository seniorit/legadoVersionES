import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap182Page } from './cap182.page';

const routes: Routes = [
  {
    path: '',
    component: Cap182Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap182PageRoutingModule {}
