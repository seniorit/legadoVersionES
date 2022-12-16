import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap65PageRoutingModule } from './cap65-routing.module';
import { Cap65Page } from './cap65.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap65PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap65Page]
})
export class Cap65PageModule {}