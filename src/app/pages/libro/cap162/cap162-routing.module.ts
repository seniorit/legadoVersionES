import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap162Page } from './cap162.page';

const routes: Routes = [
  {
    path: '',
    component: Cap162Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap162PageRoutingModule {}
