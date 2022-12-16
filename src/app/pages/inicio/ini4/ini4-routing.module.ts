import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ini4Page } from './ini4.page';

const routes: Routes = [
  {
    path: '',
    component: Ini4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ini4PageRoutingModule {}
