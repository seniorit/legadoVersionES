import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap152PageRoutingModule } from './cap152-routing.module';
import { Cap152Page } from './cap152.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap152PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap152Page]
})
export class Cap152PageModule {}
