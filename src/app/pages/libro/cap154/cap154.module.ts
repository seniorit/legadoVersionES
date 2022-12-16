import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap154PageRoutingModule } from './cap154-routing.module';
import { Cap154Page } from './cap154.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap154PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap154Page]
})
export class Cap154PageModule {}
