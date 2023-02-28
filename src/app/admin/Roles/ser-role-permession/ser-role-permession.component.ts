import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { permessionModel } from 'src/app/shared/Services/Models/Permession';
import { RoleService } from 'src/app/shared/Services/role.service';
import {PermessionService} from 'src/app/shared/Services/permession.service'
import { ARPDto } from 'src/app/shared/Services/Dto/ARPDto';
@Component({
  selector: 'app-ser-role-permession',
  templateUrl: './ser-role-permession.component.html',
  styleUrls: ['./ser-role-permession.component.css']
})
export class SerRolePermessionComponent {
  RoleId:any
  displayedColumns: string[] = ["No.",'permession','action' ];
  ARP:ARPDto = new ARPDto
  counter:number=0
  dataSource: MatTableDataSource<permessionModel> =  new MatTableDataSource<permessionModel>();
  filterForm = this.fb.group({
    PermissionName:'',
  })
  constructor(private fb:FormBuilder,private _Activatedroute:ActivatedRoute,private permission:PermessionService,private role:RoleService){}
  ngOnInit(): void {
    this.RoleId=this._Activatedroute.snapshot.paramMap.get("id");
    this.GetData();
  }

GetData(){
this.permission.GetAll(this.RoleId).subscribe(respone=>{
  console.log(respone)
 this.dataSource = respone.result
 console.log(this.dataSource)
});
}
Add(id:number){
  this.ARP.RoleId =this.RoleId
  this.ARP.PermessionId = id
  this.role.SetRolePermissions(this.ARP).subscribe(respone=>{
    this.GetData()
  })
}

filter(){}
}
