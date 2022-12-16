import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap107PageRoutingModule } from './cap107-routing.module';

import { Cap107Page } from './cap107.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap107PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap107Page]
})
export class Cap107PageModule {}
