import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap147PageRoutingModule } from './cap147-routing.module';

import { Cap147Page } from './cap147.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap147PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap147Page]
})
export class Cap147PageModule {}
