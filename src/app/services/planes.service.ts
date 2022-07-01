import { IPlanes } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  private listaPlanes: IPlanes[];

  constructor(private http: HttpClient) {
    this.listaPlanes = [];
  }

  getPlanes(){
    let url="/assets/data/planes.json";
    return this.http.get<IPlanes[]>(url);
  }
}
