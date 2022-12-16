import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap139PageRoutingModule } from './cap139-routing.module';

import { Cap139Page } from './cap139.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap139PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap139Page]
})
export class Cap139PageModule {}
