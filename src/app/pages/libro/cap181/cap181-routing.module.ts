import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap181Page } from './cap181.page';

const routes: Routes = [
  {
    path: '',
    component: Cap181Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap181PageRoutingModule {}
