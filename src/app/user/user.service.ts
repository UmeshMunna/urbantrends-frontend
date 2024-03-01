import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000';

  login(data: any): Observable<any> {
    console.log("LOGIN FORM DATA IN FRONTEND SERVICE ##### ");
    console.log(data);
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  signup(data: any): Observable<any> {
    console.log("SIGNUP FORM DATA IN FRONTEND SERVICE ##### ");
    console.log(data);
    return this.http.post(`${this.baseUrl}/signup`, data);
  }
}
