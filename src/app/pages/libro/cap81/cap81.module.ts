import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap81PageRoutingModule } from './cap81-routing.module';
import { Cap81Page } from './cap81.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap81PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap81Page]
})
export class Cap81PageModule {}