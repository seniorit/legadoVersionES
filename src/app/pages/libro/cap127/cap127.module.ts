import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap127PageRoutingModule } from './cap127-routing.module';

import { Cap127Page } from './cap127.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap127PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap127Page]
})
export class Cap127PageModule {}
