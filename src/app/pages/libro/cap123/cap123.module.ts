import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap123PageRoutingModule } from './cap123-routing.module';

import { Cap123Page } from './cap123.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap123PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap123Page]
})
export class Cap123PageModule {}
