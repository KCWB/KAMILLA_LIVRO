import { Injectable } from '@angular/core';
import { Livro } from 'src/app/models/livro';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService{

  baseUrl = 'http://localhost:1234/'

  constructor(private http: HttpClient){}

  list(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.baseUrl+'livro/listar');
  }
  create(livro: Livro):Observable<Livro>{
    return this.http.post<Livro>(this.baseUrl+'livro/cadastrar',livro);
  }
}