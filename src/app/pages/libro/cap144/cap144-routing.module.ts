import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap144Page } from './cap144.page';

const routes: Routes = [
  {
    path: '',
    component: Cap144Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap144PageRoutingModule {}
