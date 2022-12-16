import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap84PageRoutingModule } from './cap84-routing.module';
import { Cap84Page } from './cap84.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap84PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap84Page]
})
export class Cap84PageModule {}