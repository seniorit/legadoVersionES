import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap119Page } from './cap119.page';

const routes: Routes = [
  {
    path: '',
    component: Cap119Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap119PageRoutingModule {}
