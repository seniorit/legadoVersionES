import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap52Page } from './cap52.page';

const routes: Routes = [
  {
    path: '',
    component: Cap52Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap52PageRoutingModule {}
