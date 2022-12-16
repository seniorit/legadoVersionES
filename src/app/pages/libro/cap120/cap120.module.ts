import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap120PageRoutingModule } from './cap120-routing.module';

import { Cap120Page } from './cap120.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap120PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap120Page]
})
export class Cap120PageModule {}
