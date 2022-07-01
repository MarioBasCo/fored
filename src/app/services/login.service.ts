import { ContratosService } from './contratos.service';
import { IContrato } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuario: string = "admin";
  clave: string = "123456789";

  listContratos: IContrato[] = [];

  constructor(private serCont: ContratosService) {
    this.serCont.getContratos().subscribe(data => {
      this.listContratos = data;
    });
  }

  iniciarSesion(usuario: string, clave: string) {
    if (usuario == clave) {
      let usr = this.listContratos.find(d => d.identificacion_titular == usuario);
      if (usr) {
        usr['rol']="cliente";
        return { status: true, message: '¡Ingreso correcto!', data: { usuario: usr } }
      }
      return { status: false, message: 'Las credenciales ingresadas no son correctas, por favor intente nuevamente.' }
    }
    if(this.clave == clave && this.usuario == usuario){
      const user = { "nombre": "Administrador", "rol": "administrador" };
      return {status: true, message: '¡Ingreso correcto!', data: {usuario: user}}
    }
    return {status: false, message: 'Las credenciales ingresadas no son correctas, por favor intente nuevamente.'}
  }
}
