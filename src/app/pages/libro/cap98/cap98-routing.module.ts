import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap98Page } from './cap98.page';

const routes: Routes = [
  {
    path: '',
    component: Cap98Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap98PageRoutingModule {}
