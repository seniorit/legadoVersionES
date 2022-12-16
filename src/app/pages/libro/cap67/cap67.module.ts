import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap67PageRoutingModule } from './cap67-routing.module';
import { Cap67Page } from './cap67.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap67PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap67Page]
})
export class Cap67PageModule {}