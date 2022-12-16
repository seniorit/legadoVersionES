import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap122Page } from './cap122.page';

const routes: Routes = [
  {
    path: '',
    component: Cap122Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap122PageRoutingModule {}
