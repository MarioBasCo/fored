import { DetailFactPage } from './../detail-fact/detail-fact.page';
import { IFactura } from './../interfaces/interfaces';
import { ContratosService } from './../services/contratos.service';
import { LstorageService } from './../services/lstorage.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

export class Day {
  public number: number;
  public year: number;
  public month: string;
  public monthIndex: number;
  public weekDayName: string;
  public weekDayNumber: number;
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})

export class Page2Page implements OnInit {
  num_contrato: number = 0;
  facturas: IFactura[]=[];

  constructor(
    private modalCtrl: ModalController,
    private serStorage: LstorageService,
    private serFacturas: ContratosService) { 
  }

  ngOnInit() {
    this.num_contrato = this.serStorage.get('user')?.num_contrato;
    this.serFacturas.getFacturas().subscribe(data => {
      this.facturas = data.filter(d => d.cliente.num_contrato == this.num_contrato);
      console.log(this.facturas);
    });
   
  }

  async openDetail(data: IFactura){
    const modal = await this.modalCtrl.create({
      component: DetailFactPage,
      componentProps: {
        factura: data
      },
      showBackdrop: true,
      backdropDismiss: false
    });
    return await modal.present();
  }

  getMonthName(monthIndex: number): string {
    switch (monthIndex) {
      case 0:
        return "January";      
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";

      default:
        return "";
    }
  }
  
}
