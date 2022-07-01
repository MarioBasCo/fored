import { INodos } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodosService {

  constructor(private http: HttpClient) { }

  getNodos(){
    let url="/assets/data/nodos.json";
    return this.http.get<INodos[]>(url);
  }
}
