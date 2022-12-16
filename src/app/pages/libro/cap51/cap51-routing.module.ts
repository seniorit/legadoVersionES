import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap51Page } from './cap51.page';

const routes: Routes = [
  {
    path: '',
    component: Cap51Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap51PageRoutingModule {}
