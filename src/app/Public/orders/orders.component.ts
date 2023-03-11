import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { OrderModel } from 'src/app/shared/Services/Models/Order';
import { OrderService } from 'src/app/shared/Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrdersComponent implements OnInit { 
  order:any
  constructor(private fb:FormBuilder,private Order:OrderService){}
  ngOnInit(): void {
   this.GetMyOrders()
  }
  GetMyOrders(){
    this.Order.GetMyOrders().subscribe(respone=>{
     
      this.order = respone.result
     console.log(respone.result)
    })
  }
  Delivered(id:number){
    this.Order.UpdateState(id,"Delivered").subscribe(respone=>{
      window.location.reload()
    })
  }
}
