import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap129Page } from './cap129.page';

const routes: Routes = [
  {
    path: '',
    component: Cap129Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap129PageRoutingModule {}
