import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap143Page } from './cap143.page';

const routes: Routes = [
  {
    path: '',
    component: Cap143Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap143PageRoutingModule {}
