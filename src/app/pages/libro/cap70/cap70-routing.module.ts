import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap70Page } from './cap70.page';

const routes: Routes = [
  {
    path: '',
    component: Cap70Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap70PageRoutingModule {}
