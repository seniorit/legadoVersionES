import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap32PageRoutingModule } from './cap32-routing.module';

import { Cap32Page } from './cap32.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap32PageRoutingModule,
    ComponentsModule,

  ],
  declarations: [Cap32Page]
})
export class Cap32PageModule {}
