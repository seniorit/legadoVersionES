import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap161Page } from './cap161.page';

const routes: Routes = [
  {
    path: '',
    component: Cap161Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap161PageRoutingModule {}
