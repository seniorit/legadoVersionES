import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap161PageRoutingModule } from './cap161-routing.module';
import { Cap161Page } from './cap161.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap161PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap161Page]
})
export class Cap161PageModule {}
