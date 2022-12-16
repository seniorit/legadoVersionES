import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap69PageRoutingModule } from './cap69-routing.module';
import { Cap69Page } from './cap69.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap69PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap69Page]
})
export class Cap69PageModule {}