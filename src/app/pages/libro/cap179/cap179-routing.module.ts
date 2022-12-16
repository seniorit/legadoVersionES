import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap179Page } from './cap179.page';

const routes: Routes = [
  {
    path: '',
    component: Cap179Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap179PageRoutingModule {}
