import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { RolesModel } from 'src/app/shared/Services/Models/Roles';
import { RoleService } from 'src/app/shared/Services/role.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowRoleComponent implements OnInit{
  displayedColumns: string[] = ["No.",'RoleName','action' ];
  counter:number=0
  dataSource: MatTableDataSource<RolesModel> =  new MatTableDataSource<RolesModel>();
  filterForm = this.fb.group({
    RoleName:'',
    
  })
  constructor(private fb:FormBuilder,private role:RoleService){}
  ngOnInit(): void {
    this.getData()
  }
  getData(rolename:string=''){
    this.role.GetAll(rolename).subscribe(respone=>{
      console.log(respone)
      this.dataSource = respone.result
    })
  }
  filter(){
    this.getData(this.filterForm.value.RoleName as string)
  }
  deleteRole(id:number){
    this.role.Delete(id).subscribe(respone=>{
      this.getData();
    })
  }
}
