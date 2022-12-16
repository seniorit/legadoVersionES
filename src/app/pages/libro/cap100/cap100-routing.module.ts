import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap100Page } from './cap100.page';

const routes: Routes = [
  {
    path: '',
    component: Cap100Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap100PageRoutingModule {}
