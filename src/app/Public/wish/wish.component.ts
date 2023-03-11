import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { cart } from 'src/app/shared/Services/Models/Cart';
import { OrderModel } from 'src/app/shared/Services/Models/Order';
import { OrderService } from 'src/app/shared/Services/order.service';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  Cart: cart =  new cart
  form=this.fb.group({
    Note:''
  })
constructor(private fb:FormBuilder,private Product:ProductsService){}
product:any

 

  isEmpty=true
  Order:OrderModel =  new OrderModel()
    ngOnInit(): void {
     this.GetwishtItem()
    }
  GetwishtItem(){
    this.Product.GetCartItem(localStorage.getItem("wish")).subscribe(respone=>{
      this.product = respone.result
      console.log(this.product)
    })
  }
  GetItemQuentity(id:number){
    var list = JSON.parse(localStorage.getItem("wish")||"[]")
    var index = list.findIndex((x:any)=>x.Id == id)
    return list[index].Quantity
  }
  RemoveFromWish(id:number){
    var list = JSON.parse(localStorage.getItem("wish")||"[]")
    list = list.filter((x:any)=>x.Id!=id)
    localStorage.setItem("wish",JSON.stringify(list))
  
    this.GetwishtItem()
  }
  MoveToCart(id:number){
    this.Cart= new cart
    var list = JSON.parse(localStorage.getItem("wish")||"[]")
    var movedList = list.filter((x:any)=>x.Id==id)
    
    this.Cart.Id =  movedList[0].Id
    this.Cart.Quantity =  movedList[0].Quantity
    var CartList = JSON.parse(localStorage.getItem("cart")||"[]")

    CartList.push(this.Cart)
    localStorage.setItem("cart",JSON.stringify(CartList))
    list = list.filter((x:any)=>x.Id!=id)
    localStorage.setItem("wish",JSON.stringify(list))
    this.GetwishtItem()
  }
  
  
}
