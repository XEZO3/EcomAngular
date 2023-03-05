import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  baseUrl = "https://localhost:7247/api/Brands/"
  constructor(private http:HttpClient) { }
  GetAll(){
var url = this.baseUrl+"GetAll"
return this.http.get<any>(url);
  }
}
