import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap158PageRoutingModule } from './cap158-routing.module';
import { Cap158Page } from './cap158.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap158PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap158Page]
})
export class Cap158PageModule {}
