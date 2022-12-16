import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap28Page } from './cap28.page';

const routes: Routes = [
  {
    path: '',
    component: Cap28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap28PageRoutingModule {}
