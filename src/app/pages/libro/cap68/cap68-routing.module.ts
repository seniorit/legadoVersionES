import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap68Page } from './cap68.page';

const routes: Routes = [
  {
    path: '',
    component: Cap68Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap68PageRoutingModule {}
