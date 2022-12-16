import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap37PageRoutingModule } from './cap37-routing.module';

import { Cap37Page } from './cap37.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap37PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap37Page]
})
export class Cap37PageModule {}
