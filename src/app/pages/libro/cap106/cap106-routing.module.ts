import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap106Page } from './cap106.page';

const routes: Routes = [
  {
    path: '',
    component: Cap106Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap106PageRoutingModule {}
