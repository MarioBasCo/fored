import { ContratosService } from './../services/contratos.service';
import { IContrato } from './../interfaces/interfaces';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { RegisterPage } from './../register/register.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {
  factual = new Date();
  items: IContrato[] = [];
  obj = {
    id: '',
    nombre: '',
    fecha: '',
    hora: ''
  }

  constructor(
    private serCon: ContratosService,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.serCon.getContratos().subscribe(data => {
      this.items = data;
    });
  }

  async eliminar(id) {
    const alert = await this.alertController.create({
      header: '!!Alerta¡¡',
      message: '¿Esta seguro de eliminar el registro?',
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
            this.items = this.items.filter(std => std.id != id);
          }
        }
      ]
    });

    await alert.present();
  }

  async mostrarMensaje(message, color='success', duration=3000){
    const toast = await this.toastController.create({
      message,
      color,
      duration
    });
    toast.present();
  }

  async modalRegister() {
    const modal = await this.modalController.create({
      component: RegisterPage,
      componentProps: {
        titulo: 'Registro',
        obj: this.obj
      },
      showBackdrop: true,
      backdropDismiss: false
    });
    return await modal.present();
  }

  async presentModal(data : any) {
    const modal = await this.modalController.create({
      component: RegisterPage,
      componentProps: {
        titulo: 'Edición',
        obj: data
      },
      showBackdrop: true,
      backdropDismiss: false
    });
    return await modal.present();
  }
}
