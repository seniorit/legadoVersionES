import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap37Page } from './cap37.page';

const routes: Routes = [
  {
    path: '',
    component: Cap37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap37PageRoutingModule {}
