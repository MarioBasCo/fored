import { IContrato, IFactura } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  constructor(private http: HttpClient) { }

  getContratos(){
    let url="/assets/data/contratos.json";
    return this.http.get<IContrato[]>(url);
  }

  getFacturas(){
    let url="/assets/data/facturas.json";
    return this.http.get<IFactura[]>(url);
  }

  async getFactutasByNum(num: number){
    let facturas: IFactura []=[];
    await this.getFacturas().subscribe(data => {
      facturas.push(...data);
    });
    return facturas.filter(d => d.cliente.num_contrato == num);
  }
}
