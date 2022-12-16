import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap164Page } from './cap164.page';

const routes: Routes = [
  {
    path: '',
    component: Cap164Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap164PageRoutingModule {}
