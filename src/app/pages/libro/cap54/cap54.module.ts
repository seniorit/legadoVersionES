import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap54PageRoutingModule } from './cap54-routing.module';
import { Cap54Page } from './cap54.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap54PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap54Page]
})
export class Cap54PageModule {}