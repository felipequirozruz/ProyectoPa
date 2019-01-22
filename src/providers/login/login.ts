import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  rut:null;
  password:null;
  apiKey:null;
  rol:null;
  firstname:null;
  lastname:null;

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }
  //coneccion al servidor
  loginUser(rut,password){
    let url= "https://api.sebastian.cl/academia/api/v1/authentication/authenticate";
    let info= {rut: rut ,password:password };
    return this.http.post(url,info);
  }
  //envio mensaje para restablecer contraseña
  forgotpass(){
    let url= "https://api.sebastian.cl/academia/api/v1/authentication/forgot/"+this.rut;
    return this.http.post(url,{});
  }

  //obtiene el nombre del profesor
  teacherNameGet(){
      let url = "https://api.sebastian.cl/academia/api/v1/teachers/"+this.rut;
      let httpOptions = {
        headers: new HttpHeaders({ 'X-API-KEY': this.apiKey})
      };
      return this.http.get(url,httpOptions).subscribe((data:any)=>{
          this.firstname = data.firstName;
          this.lastname = data.lastName;
          },
          error=> {}
          );
  };
  
  //obtiene el nombre del estudiante
  studentNameGet(){
    let url = "https://api.sebastian.cl/academia//api/v1/students/"+this.rut;
    let httpOptions = {
      headers: new HttpHeaders({ 'X-API-KEY': this.apiKey})
    };
    return this.http.get(url,httpOptions).subscribe((data:any)=>{
        this.firstname = data.firstName;
        this.lastname = data.lastName;
        },
        error=> {}
        );
};  


}
