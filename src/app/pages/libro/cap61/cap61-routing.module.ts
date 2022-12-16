import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap61Page } from './cap61.page';

const routes: Routes = [
  {
    path: '',
    component: Cap61Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap61PageRoutingModule {}
