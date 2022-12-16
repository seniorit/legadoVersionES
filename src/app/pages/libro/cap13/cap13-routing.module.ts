import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap13Page } from './cap13.page';

const routes: Routes = [
  {
    path: '',
    component: Cap13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap13PageRoutingModule {}
