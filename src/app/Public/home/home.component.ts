import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { CategoryService } from 'src/app/shared/Services/category.service';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any
  category:any
constructor(private fb:FormBuilder,private Category:CategoryService,private Products:ProductsService){}
  ngOnInit(): void {
   
    this.GetCategory()
    this.GetProducts()
  }
  GetCategory(){
 this.Category.GetAll().subscribe(respone=>{
  this.category = respone.result
 })
  }
  GetProducts(){
    this.Products.GetAll().subscribe(respone=>{
      this.products = respone.result
     })
  }
  
}
