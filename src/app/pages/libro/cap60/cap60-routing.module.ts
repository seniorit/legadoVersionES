import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap60Page } from './cap60.page';

const routes: Routes = [
  {
    path: '',
    component: Cap60Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap60PageRoutingModule {}
