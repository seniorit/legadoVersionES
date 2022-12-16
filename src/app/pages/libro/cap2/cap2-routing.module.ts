import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap2Page } from './cap2.page';

const routes: Routes = [
  {
    path: '',
    component: Cap2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap2PageRoutingModule {}
