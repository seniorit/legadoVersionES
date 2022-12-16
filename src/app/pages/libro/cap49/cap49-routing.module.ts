import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap49Page } from './cap49.page';

const routes: Routes = [
  {
    path: '',
    component: Cap49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap49PageRoutingModule {}
