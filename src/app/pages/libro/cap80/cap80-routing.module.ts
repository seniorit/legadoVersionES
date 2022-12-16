import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap80Page } from './cap80.page';

const routes: Routes = [
  {
    path: '',
    component: Cap80Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap80PageRoutingModule {}
