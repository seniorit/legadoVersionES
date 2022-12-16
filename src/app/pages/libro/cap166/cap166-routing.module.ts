import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap166Page } from './cap166.page';

const routes: Routes = [
  {
    path: '',
    component: Cap166Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap166PageRoutingModule {}
