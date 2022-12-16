import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap54Page } from './cap54.page';

const routes: Routes = [
  {
    path: '',
    component: Cap54Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap54PageRoutingModule {}
