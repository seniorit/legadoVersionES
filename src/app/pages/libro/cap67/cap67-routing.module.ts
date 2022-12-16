import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap67Page } from './cap67.page';

const routes: Routes = [
  {
    path: '',
    component: Cap67Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap67PageRoutingModule {}
