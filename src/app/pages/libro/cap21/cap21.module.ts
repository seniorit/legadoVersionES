import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap21PageRoutingModule } from './cap21-routing.module';

import { Cap21Page } from './cap21.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap21PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap21Page]
})
export class Cap21PageModule {}
