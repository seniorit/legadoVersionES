import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap95Page } from './cap95.page';

const routes: Routes = [
  {
    path: '',
    component: Cap95Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap95PageRoutingModule {}
