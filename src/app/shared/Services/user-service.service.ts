import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userModel } from './Models/user';
import { userFilter } from './filters/userFilter';
import { registerDto } from './Dto/registerDto';
import { updateUserDto } from './Dto/UpdateUserDto';
import { LoginDto } from './Dto/LoginDto';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = "https://localhost:7247/api/users/"
  constructor(private http:HttpClient) { }

  GetAll(userfilter:userFilter){
    let url = this.baseUrl +"getall?Name="+userfilter?.Name+"&Email="+userfilter?.Email+"&RoleName="+userfilter?.RoleName
    return this.http.get<any>(url);   
  }
  Add(addForm:registerDto){
    let url = this.baseUrl +"Register"
    return this.http.post(url,{
      name: addForm.Name,
      email: addForm.Email,
      password: addForm.password,
      roleId: addForm.roleId
    })
  }
  update(update:updateUserDto){
    let url = this.baseUrl +"Update"
    return this.http.put(url,{
      id:update.id,
      name: update.Name,
      email: update.Email,
      password: update.password,
      roleId: update.roleId
    })
  }
  GetById(Id:number){
    let url = this.baseUrl +"GetById/"+Id
    return this.http.get<any>(url)
  }
  Delete(Id:number){
    let url = this.baseUrl +"Delete/"+Id
    return this.http.delete(url)
    
  }
  Login(Login:LoginDto){
    let url = this.baseUrl +"Login/"
    return this.http.post<any>(url,{
      Email:Login.Email,
      Password:Login.Password
    })
  }
}
