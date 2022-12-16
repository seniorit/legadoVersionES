import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap169PageRoutingModule } from './cap169-routing.module';
import { Cap169Page } from './cap169.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap169PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap169Page]
})
export class Cap169PageModule {}
