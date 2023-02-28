import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { registerDto } from 'src/app/shared/Services/Dto/registerDto';
import { updateUserDto } from 'src/app/shared/Services/Dto/UpdateUserDto';
import { RolesModel } from 'src/app/shared/Services/Models/Roles';
import { userModel } from 'src/app/shared/Services/Models/user';
import { RoleService } from 'src/app/shared/Services/role.service';
import { UserServiceService } from 'src/app/shared/Services/user-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit {
  Roles:RolesModel[]|undefined
  userId:any
  users: updateUserDto
  currentRole:string|undefined
form = this.fb.group({
  Name:'',
  Email:'',
  Password:'',
  roleId:0
})
constructor(private fb:FormBuilder,private user:UserServiceService,private role:RoleService,private _Activatedroute:ActivatedRoute){
  this.users = new updateUserDto
  
  
}
  ngOnInit(): void {
   
    this.userId=this._Activatedroute.snapshot.paramMap.get("id");

    this.user.GetById(this.userId).subscribe(respone=>{
      this.users.id = respone.result.id
      this.users.Email = respone.result.Email as string
      this.users.Name = respone.result.Name as string
      this.users.password = respone.result.Password as string
      this.users.roleId = respone.result.roleId as number
      this.form.value.Email = respone.result.email
      
      this.form.value.Name = respone.result.name
      this.form.value.roleId = respone.result.roles.id    
      this.currentRole= respone.result.roles.roleName      
    })
    
    this.role.GetAll().subscribe(respone=>{
      this.Roles = respone.result
      console.log(this.Roles)
    })
  }
  update(){
    this.users.Email = this.form.value.Email as string
    this.users.Name = this.form.value.Name as string
    this.users.password = this.form.value.Password as string
    this.users.roleId = this.form.value.roleId as number
    this.user.update(this.users).subscribe(respone=>{
      console.log(respone)
    })
  }
}
