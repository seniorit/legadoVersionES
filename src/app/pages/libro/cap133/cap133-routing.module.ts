import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap133Page } from './cap133.page';

const routes: Routes = [
  {
    path: '',
    component: Cap133Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap133PageRoutingModule {}
