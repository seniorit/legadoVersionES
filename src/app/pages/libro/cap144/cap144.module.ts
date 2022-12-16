import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap144PageRoutingModule } from './cap144-routing.module';

import { Cap144Page } from './cap144.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap144PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap144Page]
})
export class Cap144PageModule {}
