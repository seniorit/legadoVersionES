import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap124Page } from './cap124.page';

const routes: Routes = [
  {
    path: '',
    component: Cap124Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap124PageRoutingModule {}
