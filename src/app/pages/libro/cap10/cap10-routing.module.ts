import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap10Page } from './cap10.page';

const routes: Routes = [
  {
    path: '',
    component: Cap10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap10PageRoutingModule {}
