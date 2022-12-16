import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap118Page } from './cap118.page';

const routes: Routes = [
  {
    path: '',
    component: Cap118Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap118PageRoutingModule {}
