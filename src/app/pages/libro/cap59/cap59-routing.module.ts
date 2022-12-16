import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap59Page } from './cap59.page';

const routes: Routes = [
  {
    path: '',
    component: Cap59Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap59PageRoutingModule {}
