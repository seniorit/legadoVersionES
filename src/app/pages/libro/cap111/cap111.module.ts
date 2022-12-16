import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap111PageRoutingModule } from './cap111-routing.module';

import { Cap111Page } from './cap111.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap111PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap111Page]
})
export class Cap111PageModule {}
