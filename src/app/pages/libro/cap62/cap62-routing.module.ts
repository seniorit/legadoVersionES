import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap62Page } from './cap62.page';

const routes: Routes = [
  {
    path: '',
    component: Cap62Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap62PageRoutingModule {}
