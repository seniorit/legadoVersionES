import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap75Page } from './cap75.page';

const routes: Routes = [
  {
    path: '',
    component: Cap75Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap75PageRoutingModule {}
