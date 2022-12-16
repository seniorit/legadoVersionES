import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap170PageRoutingModule } from './cap170-routing.module';
import { Cap170Page } from './cap170.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap170PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap170Page]
})
export class Cap170PageModule {}
