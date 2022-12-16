import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap68PageRoutingModule } from './cap68-routing.module';
import { Cap68Page } from './cap68.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap68PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap68Page]
})
export class Cap68PageModule {}