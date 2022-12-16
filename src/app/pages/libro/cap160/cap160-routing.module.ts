import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap160Page } from './cap160.page';

const routes: Routes = [
  {
    path: '',
    component: Cap160Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap160PageRoutingModule {}
