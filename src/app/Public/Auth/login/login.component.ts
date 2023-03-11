import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/shared/Services/Dto/LoginDto';
import { UserServiceService } from 'src/app/shared/Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginDto:LoginDto=new LoginDto()
  form=this.fb.group({
    Email:["",[Validators.required, Validators.email]],
    Password:["",[Validators.required]]
  })
constructor(private fb:FormBuilder,private user:UserServiceService,private route:Router){}
  ngOnInit(): void {
   if(localStorage.getItem("Token")!=null){
    this.route.navigate(['/public'])
   }
  }
get f() { return this.form.controls; }
Login(){
  this.submitted = true;
  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {
   
    this.loginDto.Email= this.form.value.Email as string
      this.loginDto.Password= this.form.value.Password as string
      this.user.Login(this.loginDto).subscribe(respone=>{
        if(respone.result.token!=null){
          localStorage.setItem("Token",respone.result.token);
          
         this.route.navigate(['/public']).then(() => {
          window.location.reload();
        });
        }
      
      })
  }
}
}
