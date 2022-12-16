import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap132Page } from './cap132.page';

const routes: Routes = [
  {
    path: '',
    component: Cap132Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap132PageRoutingModule {}
