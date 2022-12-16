import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap114PageRoutingModule } from './cap114-routing.module';

import { Cap114Page } from './cap114.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap114PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap114Page]
})
export class Cap114PageModule {}
