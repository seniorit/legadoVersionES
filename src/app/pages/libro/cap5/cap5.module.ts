import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap5PageRoutingModule } from './cap5-routing.module';

import { Cap5Page } from './cap5.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap5PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap5Page]
})
export class Cap5PageModule {}
