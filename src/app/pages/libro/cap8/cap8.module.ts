import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap8PageRoutingModule } from './cap8-routing.module';

import { Cap8Page } from './cap8.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap8PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap8Page]
})
export class Cap8PageModule {}
