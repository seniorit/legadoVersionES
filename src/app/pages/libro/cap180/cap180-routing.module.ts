import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap180Page } from './cap180.page';

const routes: Routes = [
  {
    path: '',
    component: Cap180Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap180PageRoutingModule {}
