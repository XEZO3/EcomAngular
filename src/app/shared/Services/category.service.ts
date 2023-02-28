import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoryFilter } from './filters/categoryFilter';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = "https://localhost:7247/api/Category/"
  constructor(private http:HttpClient) { }
  GetAll(filter:categoryFilter){
var url = this.baseUrl+"GetAll?Name="+filter.Name+"&IsAvailable="+filter.IsAvilable
return this.http.get<any>(url);
  }
}
