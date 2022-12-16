import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap24PageRoutingModule } from './cap24-routing.module';

import { Cap24Page } from './cap24.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap24PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap24Page]
})
export class Cap24PageModule {}
