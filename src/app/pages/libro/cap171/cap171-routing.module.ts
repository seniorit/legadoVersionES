import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap171Page } from './cap171.page';

const routes: Routes = [
  {
    path: '',
    component: Cap171Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap171PageRoutingModule {}
