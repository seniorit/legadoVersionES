import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap125Page } from './cap125.page';

const routes: Routes = [
  {
    path: '',
    component: Cap125Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap125PageRoutingModule {}
