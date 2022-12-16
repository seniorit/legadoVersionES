import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap104Page } from './cap104.page';

const routes: Routes = [
  {
    path: '',
    component: Cap104Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap104PageRoutingModule {}
