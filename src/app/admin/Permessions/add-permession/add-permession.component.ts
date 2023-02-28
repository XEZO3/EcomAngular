import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { permessionModel } from 'src/app/shared/Services/Models/Permession';
import { PermessionService } from 'src/app/shared/Services/permession.service';

@Component({
  selector: 'app-add-permession',
  templateUrl: './add-permession.component.html',
  styleUrls: ['./add-permession.component.css']
})
export class AddPermessionComponent  {
  permessionObj:permessionModel
  form = this.fb.group({
    PermissionName:''
  })
 constructor(private fb:FormBuilder,private permission:PermessionService){
this.permessionObj = new permessionModel
 }
 Add(){
  this.permessionObj.PermissionName=this.form.value.PermissionName as string
this.permission.Add(this.permessionObj).subscribe(respone=>{})
 }
}
