import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap146Page } from './cap146.page';

const routes: Routes = [
  {
    path: '',
    component: Cap146Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap146PageRoutingModule {}
