import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap110Page } from './cap110.page';

const routes: Routes = [
  {
    path: '',
    component: Cap110Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap110PageRoutingModule {}
