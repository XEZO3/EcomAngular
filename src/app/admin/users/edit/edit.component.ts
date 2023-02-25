import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/shared/Services/role.service';
import { UserServiceService } from 'src/app/shared/Services/user-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit {
  Roles:any
  userId:any
form = this.fb.group({
  Name:'',
  Email:'',
  Password:'',
  roleId:0
})
constructor(private fb:FormBuilder,private user:UserServiceService,private role:RoleService,private _Activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.userId=this._Activatedroute.snapshot.paramMap.get("id");

    this.user.GetById().subscribe(respone=>{
      this.form.value.Name=respone.result.name
      this.form.value.Email=respone.result.email
      this.form.value.roleId=respone.result.roleId
    })
    this.role.GetAll().subscribe(respone=>{
      this.Roles = respone.result
    })
  }
}
