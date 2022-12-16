import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap127Page } from './cap127.page';

const routes: Routes = [
  {
    path: '',
    component: Cap127Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap127PageRoutingModule {}
