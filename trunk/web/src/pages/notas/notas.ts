import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ConsultaNotaProvider } from '../../providers/consulta-nota/consulta-nota';
import {  DetalleNotaPage } from '../detalle-nota/detalle-nota';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public no: ConsultaNotaProvider, public  alertCtrl: AlertController ) {
    this.objetoRecibidoNota = navParams.data;
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

   alert("buscando un detalle");

    console.log(obj.contenido);

    this.navCtrl.push(DetalleNotaPage);

  /*let prompt = this.AlertController.create({
          title: obj.titulo,
          subTitle: obj.fecha_creada,
          message: obj.contenido,
          buttons: [
              {
                  text: 'Cerrar'
              }
          ]
      });

      prompt.present();*/
  }

}
