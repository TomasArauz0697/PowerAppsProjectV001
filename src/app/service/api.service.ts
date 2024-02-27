import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private urlAPI= "https://mongo-arauztracker-node.onrender.com/cuenta";
  constructor(private http:HttpClient) { }

  public getData():Observable<any>{
    return this.http.get<any>(this.urlAPI)
  }

}
