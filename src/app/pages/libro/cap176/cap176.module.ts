import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap176PageRoutingModule } from './cap176-routing.module';
import { Cap176Page } from './cap176.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap176PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap176Page]
})
export class Cap176PageModule {}
