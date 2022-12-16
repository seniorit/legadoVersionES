import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap113Page } from './cap113.page';

const routes: Routes = [
  {
    path: '',
    component: Cap113Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap113PageRoutingModule {}
