import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap30Page } from './cap30.page';

const routes: Routes = [
  {
    path: '',
    component: Cap30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap30PageRoutingModule {}
