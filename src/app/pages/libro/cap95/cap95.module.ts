import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap95PageRoutingModule } from './cap95-routing.module';

import { Cap95Page } from './cap95.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap95PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap95Page]
})
export class Cap95PageModule {}
