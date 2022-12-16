import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap134PageRoutingModule } from './cap134-routing.module';

import { Cap134Page } from './cap134.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap134PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap134Page]
})
export class Cap134PageModule {}
