import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap165PageRoutingModule } from './cap165-routing.module';
import { Cap165Page } from './cap165.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap165PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap165Page]
})
export class Cap165PageModule {}
