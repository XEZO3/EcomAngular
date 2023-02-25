import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { registerDto } from 'src/app/shared/Services/Dto/registerDto';
import { RolesModel } from 'src/app/shared/Services/Models/Roles';
import { RoleService } from 'src/app/shared/Services/role.service';
import { UserServiceService } from 'src/app/shared/Services/user-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit  {
  Roles:any
addForm=this.fb.group({
  Name:'',
  Email:'',
  Password:'',
  roleId:0
})
RegisterDto:registerDto
constructor(private fb:FormBuilder,private roles:RoleService,private users:UserServiceService){
this.RegisterDto  =new registerDto
}
  ngOnInit(): void {
    this.roles.GetAll().subscribe(respone=>{
      this.Roles = respone.result
      console.log(this.Roles)
    })
  }
  Add(){
    this.RegisterDto.Email = this.addForm.value.Email as string
    this.RegisterDto.Name = this.addForm.value.Email as string
    this.RegisterDto.password = this.addForm.value.Email as string
    this.RegisterDto.roleId = this.addForm.value.roleId as number 
    this.users.Add(this.RegisterDto).subscribe(respone=>{
      console.log(respone)
    })
  }
}
