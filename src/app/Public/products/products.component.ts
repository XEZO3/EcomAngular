import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { CategoryService } from 'src/app/shared/Services/category.service';
import { ProductFilter } from 'src/app/shared/Services/filters/ProductsFilter';
import { cart } from 'src/app/shared/Services/Models/Cart';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filterform: FormGroup;
  products:any
  productscpy:any
  brands:any
  category:any
  Cart: cart =  new cart
  CartList: cart[] =  []
  ProductFilter:ProductFilter =  new ProductFilter
  formsearch= this.fb.group({
    Name:''
  })
  form=this.fb.group({
    quantity:1
  })
constructor(private fb:FormBuilder,private Brand:BrandsService,private Products:ProductsService,private Category:CategoryService){
  this.filterform=this.fb.group({
    BrandsId: new FormArray([]),
    maxPrice:0,
    minPrice:0,
    CategoryId:new FormArray([]),
    Availability:new FormArray([])
  })

}
  ngOnInit(): void {
   
    this.GetProducts(this.ProductFilter)
    this.GetBrands()
    this.GetCategory()
  }
  onCheckboxChange(event: any,forwho:number) {
    const CategoryId = (this.filterform.controls['CategoryId'] as FormArray);
    const BrandsId = (this.filterform.controls['BrandsId'] as FormArray);
    const Availability = (this.filterform.controls['Availability'] as FormArray);
    if(forwho==1){
    if (event.target.checked) {
      BrandsId.push(new FormControl(event.target.value));
    } else {
      const index = BrandsId.controls
      .findIndex(x => x.value === event.target.value);
      BrandsId.removeAt(index);
    }
  }else if (forwho==2){
    if (event.target.checked) {
      CategoryId.push(new FormControl(event.target.value));
    } else {
      const index = CategoryId.controls
      .findIndex(x => x.value === event.target.value);
      CategoryId.removeAt(index);
    }
  }else{
    if (event.target.checked) {
      Availability.push(new FormControl(event.target.value));
    } else {
      const index = Availability.controls
      .findIndex(x => x.value === event.target.value);
      Availability.removeAt(index);
    }
  }
  }

  
  GetProducts(filter:ProductFilter){
    this.Products.GetAll(filter).subscribe(respone=>{
      this.products = respone.result
      this.productscpy = respone.result
     })
  }
  GetBrands(){
    this.Brand.GetAll().subscribe(respone=>{
      this.brands = respone.result
     })
  }
  GetCategory(){
    this.Category.GetAll().subscribe(respone=>{
      this.category = respone.result
     })
  }
  filter(){
    this.products = this.productscpy.filter((obj:any)=>{
      
      return (this.filterform.controls['BrandsId'].value.includes(String(obj.brandsId))||this.filterform.controls['BrandsId'].value.length==0)&&((obj.price<this.filterform.value.maxPrice &&obj.price>this.filterform.value.minPrice)||(this.filterform.value.minPrice==0||this.filterform.value.maxPrice==0)&&(this.filterform.controls['CategoryId'].value.includes(String(obj.categoryId))||this.filterform.controls['CategoryId'].value.length==0))&&(this.filterform.controls['Availability'].value.includes(obj.avilability)||this.filterform.controls['Availability'].value.length==0)
    })
    console.log(this.filterform.controls['Availability'].value)
  }
  search(){
    this.ProductFilter.Description=this.formsearch.value.Name as string
    this.ProductFilter.name=this.formsearch.value.Name as string
    this.GetProducts(this.ProductFilter)
  }
  AddToCart(id:number){
    this.Cart.Id = id  as number
    this.Cart.Quantity = this.form.value.quantity as number
   
  if(localStorage.getItem("cart")==null){
   
    this.CartList.push(this.Cart)
    localStorage.setItem("cart",JSON.stringify(this.CartList))
    this.CartList=[]
  this.Cart= new cart
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
  this.CartList=[]
  this.Cart= new cart
  }
  AddToWish(id:number){
    this.CartList=[]
  this.Cart= new cart
    this.Cart.Id = id  as number
    this.Cart.Quantity = this.form.value.quantity as number
   
  if(localStorage.getItem("wish")==null){
   
    this.CartList.push(this.Cart)
    localStorage.setItem("wish",JSON.stringify(this.CartList))
    this.CartList=[]
  this.Cart= new cart
  }else{
    this.CartList = JSON.parse(localStorage.getItem("wish") || "[]");
    var temp =this.CartList.findIndex((item)=>{return item.Id==this.Cart.Id})
    if(this.CartList[temp]!=null){
      this.CartList[temp].Quantity=this.CartList[temp].Quantity+1
      localStorage.setItem("wish",JSON.stringify(this.CartList))
      }else{
        this.CartList.push(this.Cart)
        localStorage.setItem("wish",JSON.stringify(this.CartList))
      }
    
  }
  
  }
}
