import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { BrandModel } from 'src/app/shared/Services/Models/Brands';

@Component({
  selector: 'app-brand-show',
  templateUrl: './brand-show.component.html',
  styleUrls: ['./brand-show.component.css']
})
export class BrandShowComponent implements OnInit {
  displayedColumns: string[] = ["No.",'Name','IsAvilable','action' ];
  counter:number=0
 // categoryFilter:categoryFilter =  new categoryFilter
  dataSource: MatTableDataSource<BrandModel> =  new MatTableDataSource<BrandModel>();
  constructor(private brand:BrandsService){
    
  }
  ngOnInit(): void {
    this.GetAll();
  }
  
  GetAll(){
    this.brand.GetAll().subscribe(respone=>{
      this.dataSource = respone.result
    })
  }
}
