import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { User } from '../interfaces/user';
import { throwError, Observable, retry, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(url: string) {
    return this.http.get(`${this.API_URI}` + url);
  }

  getOne(id: string | number, url: string) {
    return this.http.get(`${this.API_URI}` + url + `/${id}`);
  }

  delete(id: number | string, url: string) {
    return this.http.delete(`${this.API_URI}` + url + `/${id}`);
  }

  update(id: string | number, updated: any, url: string): Observable<User> {
    return this.http.post(`${this.API_URI}` + url + `/${id}`, updated);
  }

  save(Usuario: any, url: string) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.API_URI}` + url, JSON.stringify(Usuario), { headers: headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  getDropListEditorial():Observable<any[]>{
    return this.http.get<any>(this.API_URI+'/editorial')
    }
  getDropListPais():Observable<any[]>{
    return this.http.get<any>(this.API_URI+'/pais')
    }
  getDropListTipolibro():Observable<any[]>{
   return this.http.get<any>(this.API_URI+'/tipolibro')
    }
  getDropListLibro():Observable<any[]>{
    return this.http.get<any>(this.API_URI+'/libro')
    }
  getDropListArea():Observable<any[]>{
   return this.http.get<any>(this.API_URI+'/area')
    }
  getDropListAutor():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/autor')
    }
  getDropListAfiliado():Observable<any[]>{
   return this.http.get<any>(this.API_URI+'/afiliado')
    }
  getDropListTipoprestamo():Observable<any[]>{
   return this.http.get<any>(this.API_URI+'/tipoprestamo')
    }
  getDropListEstado():Observable<any[]>{
   return this.http.get<any>(this.API_URI+'/estado')
    }
  getDropListLibrosporexistencia():Observable<any[]>{
   return this.http.get<any>(this.API_URI+'/librosporexistencia')
    }
      
    

  guardar(Usuario: any, url: string) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.API_URI}` + url, JSON.stringify(Usuario), { headers: headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
