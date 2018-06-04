import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertaNotaPage } from './inserta-nota';


@NgModule({
  declarations: [
    InsertaNotaPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertaNotaPage),
  ],
})
export class InsertaNotaPageModule {}
