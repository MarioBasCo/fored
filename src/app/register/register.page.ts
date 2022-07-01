import { BodegasService } from './../services/bodegas.service';
import { NodosService } from './../services/nodos.service';
import { IPlanes, INodos, IBodegas } from './../interfaces/interfaces';
import { PlanesService } from './../services/planes.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  detalle: string = '';
  estado: boolean = true;
  listaPlanes: IPlanes[]=[];
  listaNodos: INodos[]=[];
  listaBodegas: IBodegas[]=[];

  constructor(
    private modalCtrl: ModalController,
    private toastController: ToastController, 
    private planSer: PlanesService, private nodSer: NodosService,
    private bodSer: BodegasService) { }

  ngOnInit() {
    this.planSer.getPlanes().subscribe(data => {
      this.listaPlanes = data;
    });
    this.nodSer.getNodos().subscribe(data => {
      this.listaNodos = data;
    });
    this.bodSer.getBodegas().subscribe(data => {
      this.listaBodegas = data;
    });
  }

  guardar() {
    const data = {
      detalle: this.detalle,
      estado: this.estado
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

  cerrarModal(){
    this.modalCtrl.dismiss();
  }
}
