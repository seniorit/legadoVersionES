import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap97PageRoutingModule } from './cap97-routing.module';

import { Cap97Page } from './cap97.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap97PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap97Page]
})
export class Cap97PageModule {}
