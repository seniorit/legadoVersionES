import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap158Page } from './cap158.page';

const routes: Routes = [
  {
    path: '',
    component: Cap158Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap158PageRoutingModule {}
