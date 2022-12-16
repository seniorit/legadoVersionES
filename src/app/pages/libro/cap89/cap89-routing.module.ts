import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap89Page } from './cap89.page';

const routes: Routes = [
  {
    path: '',
    component: Cap89Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap89PageRoutingModule {}
