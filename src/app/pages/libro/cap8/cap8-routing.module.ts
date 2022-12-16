import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap8Page } from './cap8.page';

const routes: Routes = [
  {
    path: '',
    component: Cap8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap8PageRoutingModule {}
