import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { permessionModel } from './Models/Permession';

@Injectable({
  providedIn: 'root'
})
export class PermessionService {
  baseUrl = "https://localhost:7247/api/permession/"
  constructor(private http:HttpClient) { }
Add(permession:permessionModel){
  var url = this.baseUrl+"Add"
return   this.http.post(url,{
    PermissionName:permession.PermissionName
  })
}
GetAll(PermissionName:string=''){
  var url = this.baseUrl+"GetAll"
  return this.http.get<any>(url)
}
  
}
