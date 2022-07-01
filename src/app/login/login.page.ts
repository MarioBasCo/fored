import { LstorageService } from './../services/lstorage.service';
import { ToastController } from '@ionic/angular';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = "";
  clave: string = "";

  constructor(
    private router: Router,
    private serLog: LoginService, 
    private toastController: ToastController, private serStorage: LstorageService) { }

  ngOnInit() {
  }

  acceder(){
    if(this.usuario == '' && this.clave == ''){
      return;
    }
    let acceso = this.serLog.iniciarSesion(this.usuario, this.clave);
    if(acceso.status){
      this.mostrarMensaje(acceso.message);
      console.log(acceso.data.usuario);
      this.serStorage.set('user', acceso.data.usuario);
      if(acceso.data.usuario?.['rol'] == 'administrador'){
        this.router.navigate(['/tabs/contracts']);
      } else {
        this.router.navigate(['/tabs']);
      }
      
    } else {
      this.mostrarMensaje(acceso.message, 'danger')
    }
  }

  async mostrarMensaje(message, color='success', duration=3000){
    const toast = await this.toastController.create({
      message,
      color,
      duration
    });
    toast.present();
  }
}
