import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap76PageRoutingModule } from './cap76-routing.module';
import { Cap76Page } from './cap76.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap76PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap76Page]
})
export class Cap76PageModule {}