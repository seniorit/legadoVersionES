import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap78PageRoutingModule } from './cap78-routing.module';
import { Cap78Page } from './cap78.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap78PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap78Page]
})
export class Cap78PageModule {}