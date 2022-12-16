import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap173Page } from './cap173.page';

const routes: Routes = [
  {
    path: '',
    component: Cap173Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap173PageRoutingModule {}
