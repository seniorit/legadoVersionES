import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap97Page } from './cap97.page';

const routes: Routes = [
  {
    path: '',
    component: Cap97Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap97PageRoutingModule {}
