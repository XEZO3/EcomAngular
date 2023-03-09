import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { CategoryService } from 'src/app/shared/Services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  brand:any
  category:any
  form = this.fb.group({
    Name:'',
    CategoryId:0
  })
constructor(private fb:FormBuilder,private Category:CategoryService,private Brand:BrandsService){}
  ngOnInit(): void {
    this.GetBrand()
    this.GetCategory()
  }
  GetCategory(){
 this.Category.GetAll().subscribe(respone=>{
  this.category = respone.result
 })
  }
  GetBrand(){
    this.Brand.GetAll().subscribe(respone=>{
      this.brand = respone.result
     })
  }
  
}
