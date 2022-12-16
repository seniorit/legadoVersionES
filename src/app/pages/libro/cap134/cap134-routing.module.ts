import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap134Page } from './cap134.page';

const routes: Routes = [
  {
    path: '',
    component: Cap134Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap134PageRoutingModule {}
