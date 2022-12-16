import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap56Page } from './cap56.page';

const routes: Routes = [
  {
    path: '',
    component: Cap56Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap56PageRoutingModule {}
