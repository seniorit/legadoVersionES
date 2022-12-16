import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap48PageRoutingModule } from './cap48-routing.module';

import { Cap48Page } from './cap48.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap48PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap48Page]
})
export class Cap48PageModule {}
