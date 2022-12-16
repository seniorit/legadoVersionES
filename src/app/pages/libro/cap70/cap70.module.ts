import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap70PageRoutingModule } from './cap70-routing.module';
import { Cap70Page } from './cap70.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap70PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap70Page]
})
export class Cap70PageModule {}