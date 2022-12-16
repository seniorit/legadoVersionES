import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap43PageRoutingModule } from './cap43-routing.module';

import { Cap43Page } from './cap43.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap43PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap43Page]
})
export class Cap43PageModule {}
