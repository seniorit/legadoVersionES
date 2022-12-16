import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap1Page } from './cap1.page';

const routes: Routes = [
  {
    path: '',
    component: Cap1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap1PageRoutingModule {}
