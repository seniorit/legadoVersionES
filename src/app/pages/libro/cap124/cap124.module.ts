import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap124PageRoutingModule } from './cap124-routing.module';

import { Cap124Page } from './cap124.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap124PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap124Page]
})
export class Cap124PageModule {}
