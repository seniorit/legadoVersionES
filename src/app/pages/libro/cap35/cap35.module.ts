import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap35PageRoutingModule } from './cap35-routing.module';

import { Cap35Page } from './cap35.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap35PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap35Page]
})
export class Cap35PageModule {}
