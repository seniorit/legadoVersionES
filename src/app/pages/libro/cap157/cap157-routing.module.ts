import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap157Page } from './cap157.page';

const routes: Routes = [
  {
    path: '',
    component: Cap157Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap157PageRoutingModule {}
