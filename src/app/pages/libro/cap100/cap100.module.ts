import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap100PageRoutingModule } from './cap100-routing.module';

import { Cap100Page } from './cap100.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap100PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap100Page]
})
export class Cap100PageModule {}
