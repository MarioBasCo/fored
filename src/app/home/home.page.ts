import { LstorageService } from './../services/lstorage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  texto = "";
  razon_social: string = '';
  plan: string = '';

  constructor(
    private serStorage: LstorageService
  ) {
    this.mostrarSaludo();
    this.razon_social = this.serStorage.get('user')?.razon_social;
    this.plan = this.serStorage.get('user')?.plan.detalle;
  }

  mostrarSaludo() {
    let fecha = new Date();
    let hora = fecha.getHours();

    if (hora >= 0 && hora < 12) {
      this.texto = "Buenos Días";
    }

    if (hora >= 12 && hora < 18) {
      this.texto = "Buenas Tardes";
    }

    if (hora >= 18 && hora < 24) {
      this.texto = "Buenas Noches";
    }
  }
}
