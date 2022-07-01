import { IBodegas } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodegasService {

  constructor(private http: HttpClient) { }

  getBodegas(){
    let url="/assets/data/bodegas.json";
    return this.http.get<IBodegas[]>(url);
  }
}
