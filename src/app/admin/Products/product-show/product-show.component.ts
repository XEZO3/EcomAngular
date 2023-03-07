import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsModel } from 'src/app/shared/Services/Models/Products';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  displayedColumns: string[] = ["No.",'Name','Tax','Price','Category','Brand','ProductState','action' ];
  counter:number=0
  //categoryFilter:categoryFilter =  new categoryFilter
  dataSource: MatTableDataSource<ProductsModel> =  new MatTableDataSource<ProductsModel>();
  // filterForm = this.fb.group({
  //   Name:'',
  //   IsAvilable:''
  // })
  constructor(private fb:FormBuilder,private product:ProductsService){}
  ngOnInit(): void {
    this.GetData()
  }
  GetData(){
    
    this.product.GetAll().subscribe(respone=>{
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
