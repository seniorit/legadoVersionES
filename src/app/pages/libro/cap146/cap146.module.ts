import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap146PageRoutingModule } from './cap146-routing.module';

import { Cap146Page } from './cap146.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap146PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap146Page]
})
export class Cap146PageModule {}
