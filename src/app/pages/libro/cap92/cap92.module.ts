import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap92PageRoutingModule } from './cap92-routing.module';

import { Cap92Page } from './cap92.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap92PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap92Page]
})
export class Cap92PageModule {}
