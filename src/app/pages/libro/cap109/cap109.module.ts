import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap109PageRoutingModule } from './cap109-routing.module';

import { Cap109Page } from './cap109.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap109PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap109Page]
})
export class Cap109PageModule {}
