import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap39PageRoutingModule } from './cap39-routing.module';

import { Cap39Page } from './cap39.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap39PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap39Page]
})
export class Cap39PageModule {}
