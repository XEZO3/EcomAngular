import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolesModel } from './Models/Roles';
import {ARPDto} from "./Dto/ARPDto"
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl = "https://localhost:7247/api/roles/"
  constructor(private http:HttpClient) { }
  GetAll(role:string=''){
    let url = this.baseUrl +"getall?RoleName="+role
    return this.http.get<any>(url);
  }
  Add(role:RolesModel){
    let url = this.baseUrl +"Add"
    return this.http.post(url,{
      id:0,
      roleName:role.roleName
    });
  }
  Delete(id:number){
    let url = this.baseUrl +"Delete/"+id
    return this.http.delete(url);
  }
  GetRolePermissions(id:number){
    let url = this.baseUrl +"RolePermessions/"+id
    return this.http.get<any>(url);
  }
  SetRolePermissions(arp:ARPDto){
    let url = this.baseUrl +"SetPermession/"
    return this.http.post(url,{
     roleId: arp.RoleId,
     permessionId: arp.PermessionId
    });
  }
  DeleteRolePermession(arp:ARPDto){
    let url = this.baseUrl +"Delete/"+arp.RoleId+"/"+arp.PermessionId
    return this.http.delete(url);
  }
}
