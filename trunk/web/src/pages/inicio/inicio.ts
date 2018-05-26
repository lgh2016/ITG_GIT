import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  NotasPage } from '../notas/notas';
import {  SolicitudPage } from '../solicitud/solicitud';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  objetoRecibido: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.objetoRecibido = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  abrirNotas(){
  this.navCtrl.push(NotasPage,this.objetoRecibido);

  }
  abrirSolicitud(){
  this.navCtrl.push(SolicitudPage,this.objetoRecibido);

  }
}
