import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap122PageRoutingModule } from './cap122-routing.module';

import { Cap122Page } from './cap122.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap122PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap122Page]
})
export class Cap122PageModule {}
