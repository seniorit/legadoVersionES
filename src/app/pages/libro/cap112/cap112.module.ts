import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap112PageRoutingModule } from './cap112-routing.module';

import { Cap112Page } from './cap112.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap112PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap112Page]
})
export class Cap112PageModule {}
