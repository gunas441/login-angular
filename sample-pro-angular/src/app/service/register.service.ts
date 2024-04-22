import { Injectable } from '@angular/core';
import { Register } from '../class/register';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { RegisterResponse } from '../class/register-reponse';

@Injectable({
  providedIn: 'root'
})
export class RegisterService <R extends Register>{

  constructor(private httpClient:HttpClient) { }
  private url = 'http://localhost:8080/api';

  getRegisterList():Observable<RegisterResponse<R>>{
    return this.httpClient.get(`${this.url}/list`).pipe(map((data:RegisterResponse<R>)=>data));
  }

  getByRegId(id:any):Observable<RegisterResponse<R>>{
    return this.httpClient.get(`${this.url}/byId/${id}`).pipe(map((data:RegisterResponse<R>)=>data));
  }

  save(item:R):Observable<RegisterResponse<R>>{
    return this.httpClient.post(`${this.url}/save`,item).pipe(map((data:RegisterResponse<R>)=>data));
  }

}
