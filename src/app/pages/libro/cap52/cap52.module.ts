import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap52PageRoutingModule } from './cap52-routing.module';
import { Cap52Page } from './cap52.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap52PageRoutingModule,
    ComponentsModule

  ],
  declarations: [Cap52Page]
})
export class Cap52PageModule {}