import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap140PageRoutingModule } from './cap140-routing.module';

import { Cap140Page } from './cap140.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap140PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap140Page]
})
export class Cap140PageModule {}
