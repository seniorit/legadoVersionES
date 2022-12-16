import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap25PageRoutingModule } from './cap25-routing.module';

import { Cap25Page } from './cap25.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap25PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap25Page]
})
export class Cap25PageModule {}
