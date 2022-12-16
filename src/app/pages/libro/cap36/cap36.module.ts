import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap36PageRoutingModule } from './cap36-routing.module';

import { Cap36Page } from './cap36.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap36PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap36Page]
})
export class Cap36PageModule {}
