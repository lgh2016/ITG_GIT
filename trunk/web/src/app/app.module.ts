import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import { HttpModule } from "@angular/http";
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InicioPage } from '../pages/inicio/inicio';
import { NotasPage} from  '../pages/notas/notas';
import {  SolicitudPage } from '../pages/solicitud/solicitud';
import {  DetalleNotaPage } from '../pages/detalle-nota/detalle-nota';
import {  InsertaNotaPage } from '../pages/inserta-nota/inserta-nota';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MomentModule } from 'angular2-moment';
import { LinkyModule } from 'angular-linky';
import { ConsultaNotaProvider } from '../providers/consulta-nota/consulta-nota';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    InicioPage,
    NotasPage,
    SolicitudPage,
    DetalleNotaPage,
   InsertaNotaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,HttpModule,MomentModule,LinkyModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    InicioPage,
    NotasPage,
    SolicitudPage,
    DetalleNotaPage,
    InsertaNotaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,AuthService,SplitPane,Common,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsultaNotaProvider
  ]
})
export class AppModule {}
