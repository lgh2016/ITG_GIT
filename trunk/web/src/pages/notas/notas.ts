import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { ConsultaNotaProvider } from '../../providers/consulta-nota/consulta-nota';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public no: ConsultaNotaProvider ) {
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

  let prompt = Alert.create({
          title: obj.titulo,
          subTitle: obj.fecha_creada,
          message: obj.contenido,
          buttons: [
              {
                  text: 'Cerrar'
              }
          ]
      });
      
      this.navCtrl.present(prompt);
  }

}
