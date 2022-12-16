import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap49PageRoutingModule } from './cap49-routing.module';
import { Cap49Page } from './cap49.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap49PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap49Page]
})
export class Cap49PageModule {}
