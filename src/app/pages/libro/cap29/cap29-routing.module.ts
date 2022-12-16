import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap29Page } from './cap29.page';

const routes: Routes = [
  {
    path: '',
    component: Cap29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap29PageRoutingModule {}
