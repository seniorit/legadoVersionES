import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap151PageRoutingModule } from './cap151-routing.module';
import { Cap151Page } from './cap151.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap151PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap151Page]
})
export class Cap151PageModule {}
