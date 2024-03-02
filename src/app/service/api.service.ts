import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { cuenta } from '../interfaces/cuentas';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private urlAPI= "https://mongo-arauztracker-node.onrender.com";
  http=inject(HttpClient);

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
    
   }

  constructor() { }
/*
  public getData():Observable<any>{
    return this.http.get<any>(this.urlAPI+"/cuenta")
  }

 

 public saveAccount(Cuenta:cuenta):Observable<any>{
  console.log(Cuenta)
    
    return  this.http.post(this.urlAPI+"/saveCuentas/",JSON.stringify(Cuenta),this.httpOptions).pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error)
   }))
 }
*/
 public getData2(){
  return this.http.get<cuenta[]>(this.urlAPI+"/cuenta")
}


 public saveAccount2(Cuenta:cuenta){
  return  this.http.post(this.urlAPI+"/saveCuentas/",Cuenta);
}

deleteAccount(_idAccount:string){
  return this.http.delete(this.urlAPI+'/deleteCuenta/'+_idAccount)
}


}
