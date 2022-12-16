import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap66PageRoutingModule } from './cap66-routing.module';
import { Cap66Page } from './cap66.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap66PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap66Page]
})
export class Cap66PageModule {}