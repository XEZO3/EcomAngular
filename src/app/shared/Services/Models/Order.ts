import { Time } from "@angular/common"

export class OrderModel{
    id:number
    customerId:number
    orderDate:string
    orderStateId:number
    customerNote:string
    items:Array<any>
    rate:number
    total:number
    constructor(){
        this.id=0
        this.customerId=0
        this.orderDate=''
        this.orderStateId=0
        this.customerNote=''
        this.items=[]
        this.rate=0
        this.total=0
    }
}