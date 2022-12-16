import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap110PageRoutingModule } from './cap110-routing.module';

import { Cap110Page } from './cap110.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap110PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap110Page]
})
export class Cap110PageModule {}
