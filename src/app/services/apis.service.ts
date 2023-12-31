import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApisService {
 public baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any>{
    const url = this.baseUrl+'/pokemon?limit=100'
    return this.http.get(url);
  }

  getPokemonDetail(url: string): Observable<any>{
    return this.http.get(url);
  }

}
