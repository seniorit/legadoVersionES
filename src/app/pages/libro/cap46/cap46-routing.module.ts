import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap46Page } from './cap46.page';

const routes: Routes = [
  {
    path: '',
    component: Cap46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap46PageRoutingModule {}
