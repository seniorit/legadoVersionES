import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap16Page } from './cap16.page';

const routes: Routes = [
  {
    path: '',
    component: Cap16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap16PageRoutingModule {}
