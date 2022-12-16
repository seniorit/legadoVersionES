import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap69Page } from './cap69.page';

const routes: Routes = [
  {
    path: '',
    component: Cap69Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap69PageRoutingModule {}
