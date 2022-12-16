import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap130PageRoutingModule } from './cap130-routing.module';

import { Cap130Page } from './cap130.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap130PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap130Page]
})
export class Cap130PageModule {}
