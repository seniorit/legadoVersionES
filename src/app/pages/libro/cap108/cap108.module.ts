import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap108PageRoutingModule } from './cap108-routing.module';

import { Cap108Page } from './cap108.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap108PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap108Page]
})
export class Cap108PageModule {}
