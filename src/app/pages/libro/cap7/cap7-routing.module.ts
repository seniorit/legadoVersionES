import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap7Page } from './cap7.page';

const routes: Routes = [
  {
    path: '',
    component: Cap7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap7PageRoutingModule {}
