import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { CategoryService } from 'src/app/shared/Services/category.service';
import { cart } from 'src/app/shared/Services/Models/Cart';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any
  category:any
  Cart: cart =  new cart
  CartList: cart[] =  []
  form=this.fb.group({
    quantity:1
  })
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
  AddToCart(id:number){
    this.Cart.Id = id  as number
    this.Cart.Quantity = this.form.value.quantity as number
   
  if(localStorage.getItem("cart")==null){
   
    this.CartList.push(this.Cart)
    localStorage.setItem("cart",JSON.stringify(this.CartList))
  }else{
    this.CartList = JSON.parse(localStorage.getItem("cart") || "[]");
    var temp =this.CartList.findIndex((item)=>{return item.Id==this.Cart.Id})
    if(this.CartList[temp]!=null){
      this.CartList[temp].Quantity=this.CartList[temp].Quantity+1
      localStorage.setItem("cart",JSON.stringify(this.CartList))
      }else{
        this.CartList.push(this.Cart)
        localStorage.setItem("cart",JSON.stringify(this.CartList))
      }
    
  }
  }
  
}
