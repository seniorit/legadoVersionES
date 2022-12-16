import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ini3Page } from './ini3.page';

const routes: Routes = [
  {
    path: '',
    component: Ini3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ini3PageRoutingModule {}
