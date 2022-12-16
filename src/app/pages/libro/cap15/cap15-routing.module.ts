import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap15Page } from './cap15.page';

const routes: Routes = [
  {
    path: '',
    component: Cap15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap15PageRoutingModule {}
