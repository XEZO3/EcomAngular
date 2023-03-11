import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { CategoryService } from 'src/app/shared/Services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
isLogin=true

constructor(private fb:FormBuilder,private Category:CategoryService,private Brand:BrandsService,private route:Router){}
  ngOnInit(): void {
   if(localStorage.getItem("Token")!=null){
    this.isLogin=true
   }else{
    this.isLogin=false
   }
  }
  
  logOut(){
    localStorage.removeItem("Token")
    this.isLogin=false
    this.route.navigate(['/public/Login'])
   
  }
  
  
}
