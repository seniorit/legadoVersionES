import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap181PageRoutingModule } from './cap181-routing.module';

import { Cap181Page } from './cap181.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap181PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap181Page]
})
export class Cap181PageModule {}
