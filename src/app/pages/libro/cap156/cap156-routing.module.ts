import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap156Page } from './cap156.page';

const routes: Routes = [
  {
    path: '',
    component: Cap156Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap156PageRoutingModule {}
