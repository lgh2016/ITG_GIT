import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ConsultaNotaProvider } from '../../providers/consulta-nota/consulta-nota';
import {  DetalleNotaPage } from '../detalle-nota/detalle-nota';
import { InsertaNotaPage } from '../inserta-nota/inserta-nota';

import * as Constants from '../../util/constants';

/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  objetoRecibidoNota: any;
  objetoNotas: any;
  nombreITG: any;
  objetoParadetalle: any;
  idUsuarioInsertaNota: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public no: ConsultaNotaProvider, public  alertCtrl: AlertController ) {
    this.objetoRecibidoNota = navParams.data;
    this.nombreITG = Constants.API_ENDPOINT;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');

    this.no.obtenerNotas(this.objetoRecibidoNota.id)
    	.subscribe(
    	 (data)=>{this.objetoNotas=data;},
    	 (error)=>{console.log(error);}

    	)
  }

  detalleNotas(obj)
  {

  /// alert("buscando un detalle");

   this.objetoParadetalle=obj;
    console.log(obj.contenido);

    this.navCtrl.push(DetalleNotaPage,this.objetoParadetalle);


  }
  abrirInsertarNota(idUsuario)
  {
    this.idUsuarioInsertaNota=idUsuario;
     console.log("el id "+this.idUsuarioInsertaNota);
     this.navCtrl.push(InsertaNotaPage,this.idUsuarioInsertaNota);
  }

}
