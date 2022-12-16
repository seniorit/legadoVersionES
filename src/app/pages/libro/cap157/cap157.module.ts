import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap157PageRoutingModule } from './cap157-routing.module';
import { Cap157Page } from './cap157.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap157PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap157Page]
})
export class Cap157PageModule {}
