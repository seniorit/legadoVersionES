import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap87PageRoutingModule } from './cap87-routing.module';

import { Cap87Page } from './cap87.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap87PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap87Page]
})
export class Cap87PageModule {}
