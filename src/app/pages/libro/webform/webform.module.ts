import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WebformPageRoutingModule } from './webform-routing.module';
import { WebformPage } from './webform.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebformPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WebformPage]
})
export class WebformPageModule {}
