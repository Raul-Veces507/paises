import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pasi.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiurl:string='https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams().set('fileds','name;capital;alpha2code;flag;population');

  }
  
  constructor(private http:HttpClient) { }

buscarpais(termino:string): Observable<Country[]> {

  const url= `${this.apiurl}/name/${termino}`;

  return this.http.get<Country[]>(url, {params:this.httpParams});
  
}

buscarCapita(termino:string): Observable<Country[]>{

  const url=`${this.apiurl}/capital/${termino}`

  return this.http.get<Country[]>(url,{params:this.httpParams});

}

getPaisPorAlpha(id:string): Observable<Country>{

  const url=`${this.apiurl}/alpha/${id}`

  return this.http.get<Country>(url);

}

buscarRegion(region:string):Observable<Country[]>{

  const url=`${this.apiurl}/region/${region}`

  return this.http.get<Country[]>(url,{params:this.httpParams});

}
   
}
