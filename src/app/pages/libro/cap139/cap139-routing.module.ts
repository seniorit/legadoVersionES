import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap139Page } from './cap139.page';

const routes: Routes = [
  {
    path: '',
    component: Cap139Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap139PageRoutingModule {}
