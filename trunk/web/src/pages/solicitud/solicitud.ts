import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.objetoRecibidoSolicitud= navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudPage');
  }

}
