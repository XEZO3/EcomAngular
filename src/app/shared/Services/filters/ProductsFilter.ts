export class ProductFilter{
    Price:number
   
    CategoryId:number
    BrandsId:number
    name:string
    Description:string 
    Avilability:string
    constructor(){
        this.name=''
        this.Description=''
        this.Price=0
       
        this.BrandsId=0
        this.CategoryId=0
        this.Avilability=''
    }
}