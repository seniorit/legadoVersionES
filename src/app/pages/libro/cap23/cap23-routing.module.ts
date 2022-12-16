import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap23Page } from './cap23.page';

const routes: Routes = [
  {
    path: '',
    component: Cap23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap23PageRoutingModule {}
