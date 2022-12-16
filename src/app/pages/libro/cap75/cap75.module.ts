import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap75PageRoutingModule } from './cap75-routing.module';
import { Cap75Page } from './cap75.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap75PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap75Page]
})
export class Cap75PageModule {}