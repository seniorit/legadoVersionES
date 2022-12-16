import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap119PageRoutingModule } from './cap119-routing.module';

import { Cap119Page } from './cap119.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap119PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap119Page]
})
export class Cap119PageModule {}
