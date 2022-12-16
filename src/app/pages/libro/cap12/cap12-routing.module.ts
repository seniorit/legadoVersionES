import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap12Page } from './cap12.page';

const routes: Routes = [
  {
    path: '',
    component: Cap12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap12PageRoutingModule {}
