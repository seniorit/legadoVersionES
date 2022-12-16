import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap78Page } from './cap78.page';

const routes: Routes = [
  {
    path: '',
    component: Cap78Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap78PageRoutingModule {}
