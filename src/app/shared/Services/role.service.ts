import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl = "https://localhost:7247/api/roles/"
  constructor(private http:HttpClient) { }
  GetAll(){
    let url = this.baseUrl +"getall?RoleName="
    return this.http.get<any>(url);
  }
}
