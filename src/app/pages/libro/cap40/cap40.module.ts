import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap40PageRoutingModule } from './cap40-routing.module';

import { Cap40Page } from './cap40.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap40PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap40Page]
})
export class Cap40PageModule {}
