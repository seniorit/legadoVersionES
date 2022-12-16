import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap32Page } from './cap32.page';

const routes: Routes = [
  {
    path: '',
    component: Cap32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap32PageRoutingModule {}
