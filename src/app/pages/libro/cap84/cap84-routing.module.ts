import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap84Page } from './cap84.page';

const routes: Routes = [
  {
    path: '',
    component: Cap84Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap84PageRoutingModule {}
