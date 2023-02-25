import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { userFilter } from 'src/app/shared/Services/filters/userFilter';
import { userModel } from 'src/app/shared/Services/Models/user';
import { UserServiceService } from 'src/app/shared/Services/user-service.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent  implements OnInit  {
  displayedColumns: string[] = ["No.",'name', 'email', 'roleName','action'];
  counter:number=0
  dataSource: MatTableDataSource<userModel> =  new MatTableDataSource<userModel>();
  filterForm = this.fb.group({
    Name:'',
    Email:'',
    RoleName:''
  })
  userfilter:userFilter
constructor(private Users:UserServiceService,private fb:FormBuilder){
  this.userfilter =  new userFilter()
}
ngOnInit(){
  this.getData(this.userfilter)
}
filter(){
  this.userfilter.Email=this.filterForm.value.Email as string
  this.userfilter.Name=this.filterForm.value.Name as string
  this.userfilter.RoleName=this.filterForm.value.RoleName as string
  console.log(this.userfilter.Name)
  this.getData(this.userfilter)
}
getData(userfilter:userFilter){
  this.Users.GetAll(userfilter).subscribe(respone=>{
    console.log(respone.result.length)
    this.dataSource = respone.result
  })
}
}
