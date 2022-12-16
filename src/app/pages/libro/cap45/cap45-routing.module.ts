import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap45Page } from './cap45.page';

const routes: Routes = [
  {
    path: '',
    component: Cap45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap45PageRoutingModule {}
