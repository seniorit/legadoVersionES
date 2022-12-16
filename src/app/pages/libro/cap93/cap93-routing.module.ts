import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap93Page } from './cap93.page';

const routes: Routes = [
  {
    path: '',
    component: Cap93Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap93PageRoutingModule {}
