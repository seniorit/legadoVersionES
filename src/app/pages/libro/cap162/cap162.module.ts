import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap162PageRoutingModule } from './cap162-routing.module';
import { Cap162Page } from './cap162.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap162PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap162Page]
})
export class Cap162PageModule {}
