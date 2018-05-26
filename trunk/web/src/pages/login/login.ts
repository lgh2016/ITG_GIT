import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import {AuthService} from "../../providers/auth-service";
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  resposeData : any;
  userData = {"username":"", "id":"","password":""};
  public  nombre;
  public id;

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('vamos al login');
  }

  login(){
   if(this.userData.username && this.userData.password){

    this.authService.postData(this.userData,"login",this.userData.username,this.userData.password).then((result) =>{
    this.resposeData = result;
    console.log("aaaaa "+this.resposeData.status);
    if(this.resposeData.status){
     //localStorage.setItem('userData', JSON.stringify(this.resposeData.status) )
     this.userData.username=this.resposeData.nombre_usuario;
     this.userData.id=this.resposeData.id_usuario;
     console.log("vamos bien "+this.userData.username+" "+this.userData.id);
      this.navCtrl.push(InicioPage,this.userData);
  }
  else{
    this.presentToast("Usuario y contraseña son incorrectos");
  }



    }, (err) => {
      //Connection failed message
    });
   }
   else{
    this.presentToast("Por favor ingrese usuario y contraseña ");
   }

  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
