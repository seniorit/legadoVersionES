import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap174Page } from './cap174.page';

const routes: Routes = [
  {
    path: '',
    component: Cap174Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap174PageRoutingModule {}
