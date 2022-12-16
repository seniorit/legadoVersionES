import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap3Page } from './cap3.page';

const routes: Routes = [
  {
    path: '',
    component: Cap3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap3PageRoutingModule {}
