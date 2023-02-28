import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/shared/Services/category.service';
import { categoryFilter } from 'src/app/shared/Services/filters/categoryFilter';
import { categoryModel } from 'src/app/shared/Services/Models/Category';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  displayedColumns: string[] = ["No.",'Name','IsAvilable','action' ];
  counter:number=0
  categoryFilter:categoryFilter =  new categoryFilter
  dataSource: MatTableDataSource<categoryModel> =  new MatTableDataSource<categoryModel>();
  filterForm = this.fb.group({
    Name:'',
    IsAvilable:''
  })
  constructor(private fb:FormBuilder,private category:CategoryService){}
  ngOnInit(): void {
    this.GetData(this.categoryFilter)
  }
  GetData(filter:categoryFilter){
    
    this.category.GetAll(filter).subscribe(respone=>{
      this.dataSource = respone.result
    })
  }
  filter(){
    this.categoryFilter.Name = this.filterForm.value.Name as string
    this.categoryFilter.IsAvilable = this.filterForm.value.IsAvilable as string
    this.GetData(this.categoryFilter)
  }
}
