import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap123Page } from './cap123.page';

const routes: Routes = [
  {
    path: '',
    component: Cap123Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap123PageRoutingModule {}
