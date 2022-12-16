import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap143PageRoutingModule } from './cap143-routing.module';

import { Cap143Page } from './cap143.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap143PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap143Page]
})
export class Cap143PageModule {}
