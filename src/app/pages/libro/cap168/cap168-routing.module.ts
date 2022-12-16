import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap168Page } from './cap168.page';

const routes: Routes = [
  {
    path: '',
    component: Cap168Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap168PageRoutingModule {}
