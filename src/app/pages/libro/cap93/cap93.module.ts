import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap93PageRoutingModule } from './cap93-routing.module';

import { Cap93Page } from './cap93.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap93PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap93Page]
})
export class Cap93PageModule {}
