import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap22Page } from './cap22.page';

const routes: Routes = [
  {
    path: '',
    component: Cap22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap22PageRoutingModule {}
