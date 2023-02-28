import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RolesModel } from 'src/app/shared/Services/Models/Roles';
import { RoleService } from 'src/app/shared/Services/role.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddRoleComponent  {
  role:RolesModel
  form = this.fb.group({
    RoleName:''
  })
  constructor(private fb:FormBuilder,private Roles:RoleService){
this.role=new RolesModel
  }
  
 Add(){
  this.role.roleName= this.form.value.RoleName as string
  this.Roles.Add(this.role).subscribe(respone=>{

  })
 }
}
