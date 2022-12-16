import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap53Page } from './cap53.page';

const routes: Routes = [
  {
    path: '',
    component: Cap53Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap53PageRoutingModule {}
