import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap106PageRoutingModule } from './cap106-routing.module';

import { Cap106Page } from './cap106.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap106PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap106Page]
})
export class Cap106PageModule {}
