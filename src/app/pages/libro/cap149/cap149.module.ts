import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap149PageRoutingModule } from './cap149-routing.module';
import { Cap149Page } from './cap149.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap149PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap149Page]
})
export class Cap149PageModule {}
