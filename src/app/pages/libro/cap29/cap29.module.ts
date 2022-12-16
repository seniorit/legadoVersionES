import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap29PageRoutingModule } from './cap29-routing.module';

import { Cap29Page } from './cap29.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap29PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap29Page]
})
export class Cap29PageModule {}
