import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrderModel } from 'src/app/shared/Services/Models/Order';
import { OrderService } from 'src/app/shared/Services/order.service';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  form=this.fb.group({
    Note:''
  })
constructor(private fb:FormBuilder,private Product:ProductsService,private order:OrderService){}
product:any
total:number = 0
isEmpty=true
Order:OrderModel =  new OrderModel()
  ngOnInit(): void {
   this.GetCartItem()
   if(JSON.parse(localStorage.getItem("cart")||"[]").length!=0){
    this.isEmpty=false
    console.log("ss")
   }
  }
GetCartItem(){
  this.Product.GetCartItem(localStorage.getItem("cart")).subscribe(respone=>{
    this.product = respone.result
    console.log(this.product)
  })
}
GetItemQuentity(id:number){
  var list = JSON.parse(localStorage.getItem("cart")||"[]")
  var index = list.findIndex((x:any)=>x.Id == id)
  return list[index].Quantity
}
RemoveFromCart(id:number){
  var list = JSON.parse(localStorage.getItem("cart")||"[]")
  list = list.filter((x:any)=>x.Id!=id)
  localStorage.setItem("cart",JSON.stringify(list))
  this.total=0
  this.GetCartItem()
}
checkOut(){
  this.Order.items = JSON.parse(localStorage.getItem("cart")||"[]")
  this.Order.customerNote =this.form.value.Note as string
this.order.Add(this.Order).subscribe(respone=>{
  localStorage.removeItem("cart")
  alert("Yout order have been placed")
 
  this.form.patchValue({
    Note:''
  })
  
})
}
counter(number:number){
  this.total = this.total+number
}
}
