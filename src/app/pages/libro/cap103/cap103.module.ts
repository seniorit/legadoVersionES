import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap103PageRoutingModule } from './cap103-routing.module';

import { Cap103Page } from './cap103.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap103PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap103Page]
})
export class Cap103PageModule {}
