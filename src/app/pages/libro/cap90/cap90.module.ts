import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap90PageRoutingModule } from './cap90-routing.module';

import { Cap90Page } from './cap90.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap90PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap90Page]
})
export class Cap90PageModule {}
