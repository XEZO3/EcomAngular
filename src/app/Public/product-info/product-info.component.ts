import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { cart } from 'src/app/shared/Services/Models/Cart';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  productId:any
  product:any
  quintity:number=1
  Cart: cart =  new cart
  CartList: cart[] =  []
  
constructor(private _Activatedroute:ActivatedRoute,private Product:ProductsService,private fb:FormBuilder){
}
  ngOnInit(): void {
    this.productId=this._Activatedroute.snapshot.paramMap.get("id");
this.GetById();
    
  }
GetById(){
  this.Product.GetById(this.productId).subscribe(respone=>{
    this.product =  respone.result
  })
}
AddToCart(){
  this.Cart.Id = this.productId  as number
  this.Cart.Quantity = this.quintity as number
  
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
