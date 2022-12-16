import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap113PageRoutingModule } from './cap113-routing.module';

import { Cap113Page } from './cap113.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap113PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap113Page]
})
export class Cap113PageModule {}
