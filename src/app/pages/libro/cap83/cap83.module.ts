import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap83PageRoutingModule } from './cap83-routing.module';
import { Cap83Page } from './cap83.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap83PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap83Page]
})
export class Cap83PageModule {}