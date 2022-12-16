import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap180PageRoutingModule } from './cap180-routing.module';
import { Cap180Page } from './cap180.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap180PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap180Page]
})
export class Cap180PageModule {}
