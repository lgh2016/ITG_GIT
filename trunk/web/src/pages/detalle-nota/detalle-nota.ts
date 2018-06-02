import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Constants from '../../util/constants';

/**
 * Generated class for the DetalleNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-nota',
  templateUrl: 'detalle-nota.html',
})
export class DetalleNotaPage {
 nombreITG: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombreITG = Constants.API_ENDPOINT;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleNotaPage');
  }

}
