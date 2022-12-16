import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap167PageRoutingModule } from './cap167-routing.module';
import { Cap167Page } from './cap167.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap167PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap167Page]
})
export class Cap167PageModule {}
