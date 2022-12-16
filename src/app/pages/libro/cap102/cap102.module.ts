import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap102PageRoutingModule } from './cap102-routing.module';

import { Cap102Page } from './cap102.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap102PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap102Page]
})
export class Cap102PageModule {}
