import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap129PageRoutingModule } from './cap129-routing.module';

import { Cap129Page } from './cap129.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap129PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap129Page]
})
export class Cap129PageModule {}
