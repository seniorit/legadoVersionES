import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap73PageRoutingModule } from './cap73-routing.module';
import { Cap73Page } from './cap73.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap73PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap73Page]
})
export class Cap73PageModule {}