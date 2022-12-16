import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap175Page } from './cap175.page';

const routes: Routes = [
  {
    path: '',
    component: Cap175Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap175PageRoutingModule {}
