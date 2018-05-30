import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Constants from '../../util/constants';
import { ConsultaNotaProvider } from '../../providers/consulta-nota/consulta-nota';

/**
 * Generated class for the SolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud',
  templateUrl: 'solicitud.html',
})
export class SolicitudPage {
 objetoRecibidoSolicitud: any;
 objetoSolicitudes: any;
 nombreITG: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public no: ConsultaNotaProvider) {
  	this.objetoRecibidoSolicitud= navParams.data;
    this.nombreITG = Constants.API_ENDPOINT;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudPage');
    this.no.obtenerSolicitudes(this.objetoRecibidoSolicitud.id)
      .subscribe(
       (data)=>{this.objetoSolicitudes=data;},
       (error)=>{console.log(error);}

      )
  }

  detalleSolicitudes(obj){
    alert ('buscando un detalle de solicitud');
  }

}
