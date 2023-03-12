import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { CategoryService } from 'src/app/shared/Services/category.service';
import { ProductFilter } from 'src/app/shared/Services/filters/ProductsFilter';
import { ProductsModel } from 'src/app/shared/Services/Models/Products';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  displayedColumns: string[] = ["No.",'Name','Tax','Price','Category','Brand','ProductState','action' ];
  counter:number=0;
  Category:any
  Brands:any
  ProductFilter:ProductFilter = new ProductFilter
  //categoryFilter:categoryFilter =  new categoryFilter
  dataSource: MatTableDataSource<ProductsModel> =  new MatTableDataSource<ProductsModel>();
  filterform=this.fb.group({
    Name:'',
    Price:0,
   
    CategoryId:0,
    BrandsId:0,
    Avilability:''
  })
  constructor(private fb:FormBuilder,private product:ProductsService,private brand:BrandsService,private category:CategoryService){}
  ngOnInit(): void {
    this.GetData()
    this.GetCategory()
    this.GetBrands()
  }
  GetData(){
    
    this.product.GetAll().subscribe(respone=>{
      this.dataSource = respone.result
      
    })
  }
  GetCategory(){
    this.category.GetAll().subscribe(respone=>{
      this.Category = respone.result
      
    })
  }
  GetBrands(){
    this.brand.GetAll().subscribe(respone=>{
      this.Brands = respone.result
      console.log(this.Brands)
    })
  }
  filter(){
this.ProductFilter.Price = this.filterform.value.Price as number
this.ProductFilter.Avilability = this.filterform.value.Avilability as string
this.ProductFilter.name = this.filterform.value.Name as string
this.ProductFilter.CategoryId = this.filterform.value.CategoryId as number
this.ProductFilter.BrandsId = this.filterform.value.BrandsId as number
this.product.GetAll(this.ProductFilter).subscribe(respone=>{
  this.dataSource = respone.result
})

  }
  // filter(){
  //   this.categoryFilter.Name = this.filterForm.value.Name as string
  //   this.categoryFilter.IsAvilable = this.filterForm.value.IsAvilable as string
  //   this.GetData(this.categoryFilter)
  // }
//   DeleteCategory(id:number){
// this.product.Delete(id).subscribe(respone=>{
//   this.GetData()
// })
//   }
}
