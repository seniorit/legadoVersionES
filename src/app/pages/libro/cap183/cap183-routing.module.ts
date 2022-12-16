import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap183Page } from './cap183.page';

const routes: Routes = [
  {
    path: '',
    component: Cap183Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap183PageRoutingModule {}
