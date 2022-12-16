import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap83Page } from './cap83.page';

const routes: Routes = [
  {
    path: '',
    component: Cap83Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap83PageRoutingModule {}
