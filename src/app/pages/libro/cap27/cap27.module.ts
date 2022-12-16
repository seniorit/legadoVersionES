import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap27PageRoutingModule } from './cap27-routing.module';

import { Cap27Page } from './cap27.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap27PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap27Page]
})
export class Cap27PageModule {}
