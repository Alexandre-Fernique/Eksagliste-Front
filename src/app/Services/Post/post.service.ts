import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) {

  }
  create(text:string){
    let data={
      text:text
    }
    return this.http.post(environment.api+"/post/create",data,this.httpOptions)
  }
}
