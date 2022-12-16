import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap11PageRoutingModule } from './cap11-routing.module';

import { Cap11Page } from './cap11.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap11PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap11Page]
})
export class Cap11PageModule {}
