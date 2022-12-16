import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap172PageRoutingModule } from './cap172-routing.module';
import { Cap172Page } from './cap172.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap172PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap172Page]
})
export class Cap172PageModule {}
