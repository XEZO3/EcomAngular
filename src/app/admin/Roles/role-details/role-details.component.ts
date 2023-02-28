import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ARPDto } from 'src/app/shared/Services/Dto/ARPDto';
import { permessionModel } from 'src/app/shared/Services/Models/Permession';
import { RoleService } from 'src/app/shared/Services/role.service';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {
  RoleId:any
  displayedColumns: string[] = ["No.",'permession','action' ];
  counter:number=0
  ARP:ARPDto = new ARPDto
  dataSource: MatTableDataSource<permessionModel> =  new MatTableDataSource<permessionModel>();
  filterForm = this.fb.group({
    PermissionName:'',
  })
  constructor(private fb:FormBuilder,private _Activatedroute:ActivatedRoute,private role:RoleService){}
  ngOnInit(): void {
    this.RoleId=this._Activatedroute.snapshot.paramMap.get("id");
    this.GetData();
  }

GetData(){
this.role.GetRolePermissions(this.RoleId).subscribe(respone=>{
  console.log(respone)
 this.dataSource = respone
 console.log(this.dataSource)
});
}
DeletePermession(id:number){
  this.ARP.RoleId = this.RoleId
  this.ARP.PermessionId = id
  this.role.DeleteRolePermession(this.ARP).subscribe(respone=>{
    this.GetData()
  })
}
filter(){}
}
