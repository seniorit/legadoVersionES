import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap179PageRoutingModule } from './cap179-routing.module';
import { Cap179Page } from './cap179.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap179PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap179Page]
})
export class Cap179PageModule {}
