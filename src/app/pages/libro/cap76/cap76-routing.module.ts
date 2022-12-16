import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap76Page } from './cap76.page';

const routes: Routes = [
  {
    path: '',
    component: Cap76Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap76PageRoutingModule {}
