import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap171PageRoutingModule } from './cap171-routing.module';
import { Cap171Page } from './cap171.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap171PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap171Page]
})
export class Cap171PageModule {}
