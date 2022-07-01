import { Router } from '@angular/router';
import { LstorageService } from './../services/lstorage.service';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  rol: string = '';
  constructor(
    private router: Router,
    private alertCtrl: AlertController, 
    private serStorage: LstorageService) { }

  ngOnInit() {
    this.rol = this.serStorage.get('user')?.rol;
  }

  async cerrarCesion() {
    const alert = await this.alertCtrl.create({
      header: '!!Cerrar Sesión¡¡',
      message: '¿Esta seguro de salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.serStorage.remove('user');
            //this.router.navigate(['/login']);
            location.href = '/login';
            this.router.dispose();
            //window.location.reload(); //forzamos la recarga para evitar problemas de cache
          }
        }
      ]
    });

    await alert.present();
  }

}
