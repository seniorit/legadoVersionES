import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap131Page } from './cap131.page';

const routes: Routes = [
  {
    path: '',
    component: Cap131Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap131PageRoutingModule {}
