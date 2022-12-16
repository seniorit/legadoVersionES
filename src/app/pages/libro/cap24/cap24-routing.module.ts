import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap24Page } from './cap24.page';

const routes: Routes = [
  {
    path: '',
    component: Cap24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap24PageRoutingModule {}
