import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap111Page } from './cap111.page';

const routes: Routes = [
  {
    path: '',
    component: Cap111Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap111PageRoutingModule {}
