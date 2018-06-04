import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Constants from '../../util/constants';

/**
 * Generated class for the InsertaNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserta-nota',
  templateUrl: 'inserta-nota.html',
})
export class InsertaNotaPage {
  nombreITG: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.nombreITG = Constants.API_ENDPOINT;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertaNotaPage');
  }

}
