import { IFactura } from './../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-fact',
  templateUrl: './detail-fact.page.html',
  styleUrls: ['./detail-fact.page.scss'],
})
export class DetailFactPage implements OnInit {
  @Input() factura: IFactura;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }
}
