import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConsultaNotaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultaNotaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConsultaNotaProvider Provider');
  }

  obtenerNotas(id)
  {
    return this.http.get('http://innovandosistemas.com.mx/itg/api/opc_consultas.php?id_usr='+id+'&tipo_consulta=1');
    
  }

}
