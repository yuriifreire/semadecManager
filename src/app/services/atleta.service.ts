import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  atleta: Atleta[];
  private url = 'http://localhots/3000/atleta';

  constructor(private http: HttpClient) { }

  atletas_get(): Observable<Atleta[]>{
    return this.http.get<Atleta[]>(this.url)
  }

  atletas_post(atleta: Atleta): Observable<Atleta>{
    return this.http.post<Atleta>(this.url, atleta)
  }

}
