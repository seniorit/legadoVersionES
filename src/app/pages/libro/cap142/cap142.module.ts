import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap142PageRoutingModule } from './cap142-routing.module';

import { Cap142Page } from './cap142.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap142PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap142Page]
})
export class Cap142PageModule {}
