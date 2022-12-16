import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap153Page } from './cap153.page';

const routes: Routes = [
  {
    path: '',
    component: Cap153Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap153PageRoutingModule {}
