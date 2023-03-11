import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderDto } from './Dto/OrderDto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = "https://localhost:7247/api/Order/"
  constructor(private http:HttpClient) { }
  Add(order:orderDto){
    let url=this.baseUrl+"Add"
    return this.http.post<any>(url,{
      CustomerId:order.customerId,
      OrderState:'New',
      CustomerNote:order.customerNote,
      Items:String(JSON.stringify(order.items)),
      Rate:order.rate,
      Total:order.total
    })
  }
  GetMyOrders(){
    let url=this.baseUrl+"GetMyOrders"
    return this.http.get<any>(url)
  }
  UpdateState(id:number,state:string){
    let url=this.baseUrl+"UpdateState/"+id
    let formdata= new FormData()
    formdata.append('state',state)
    return this.http.put<any>(url,formdata)
  }
}
