import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap172Page } from './cap172.page';

const routes: Routes = [
  {
    path: '',
    component: Cap172Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap172PageRoutingModule {}
