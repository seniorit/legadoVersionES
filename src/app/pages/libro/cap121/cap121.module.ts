import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap121PageRoutingModule } from './cap121-routing.module';

import { Cap121Page } from './cap121.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap121PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap121Page]
})
export class Cap121PageModule {}
