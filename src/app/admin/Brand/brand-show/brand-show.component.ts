import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { BrandFilter } from 'src/app/shared/Services/filters/BrandFilter';
import { BrandModel } from 'src/app/shared/Services/Models/Brands';

@Component({
  selector: 'app-brand-show',
  templateUrl: './brand-show.component.html',
  styleUrls: ['./brand-show.component.css']
})
export class BrandShowComponent implements OnInit {
  displayedColumns: string[] = ["No.","Image",'Name','IsAvilable','action' ];
  counter:number=0
 // categoryFilter:categoryFilter =  new categoryFilter
 filterform=this.fb.group({
  Name:'',
  IsAvilable:''
 })
 Brandf:BrandFilter =  new BrandFilter
  dataSource: MatTableDataSource<BrandModel> =  new MatTableDataSource<BrandModel>();
  constructor(private brand:BrandsService,private fb:FormBuilder){
    
  }
  ngOnInit(): void {
    this.GetAll();
  }
  
  GetAll(){
    this.brand.GetAll().subscribe(respone=>{
      this.dataSource = respone.result
    })
  }
  DeleteBrand(id:number){
    this.brand.Delete(id).subscribe(respone=>{
      this.GetAll();
    })
  }
  filter(){
    this.Brandf.Name = this.filterform.value.Name as string
    this.Brandf.IsAvilable = this.filterform.value.IsAvilable as string
    this.brand.GetAll(this.Brandf).subscribe(respone=>{
      this.dataSource = respone.result
    })
  }
}
