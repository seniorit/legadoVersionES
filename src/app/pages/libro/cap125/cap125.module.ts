import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap125PageRoutingModule } from './cap125-routing.module';

import { Cap125Page } from './cap125.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap125PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap125Page]
})
export class Cap125PageModule {}
