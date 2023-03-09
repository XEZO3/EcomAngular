import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { CategoryService } from 'src/app/shared/Services/category.service';
import { ProductDto } from 'src/app/shared/Services/Dto/ProductDto';
import { ProductsModel } from 'src/app/shared/Services/Models/Products';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {


file:any
  Category:any
  Brands:any
  currentBrand:string=''
  currentCategory:string=''
  form=this.fb.group({
    NameAr:'',
    NameEn:'',
    DescriptionAr:'',
    DescriptionEn:'',
    Price:0,
    Tax:0,
    CategoryId:0,
    BrandsId:0,
    
    Avilability:''
  })
  Product:ProductDto= new ProductDto
  constructor(private fb:FormBuilder,private category:CategoryService,private product:ProductsService,private brand:BrandsService){}
  ngOnInit(): void {
    
    this.GetCategory()
    this.GetBrands()

  }
  selecter(e:any){

    this.file =e.target.files[0]
  
  }
Add(){
  this.Product.NameAr = this.form.value.NameAr as string
  this.Product.NameEn = this.form.value.NameEn as string
  this.Product.DescriptionAr = this.form.value.DescriptionAr as string
  this.Product.DescriptionEn = this.form.value.DescriptionEn as string
  this.Product.Tax = this.form.value.Tax as number
  this.Product.Price = this.form.value.Price as number
  this.Product.CategoryId = this.form.value.CategoryId as number
  this.Product.BrandsId = this.form.value.BrandsId as number
 // this.Product.Image = this.form.value.Image as string
  this.Product.Avilability = this.form.value.Avilability as string
  this.product.Add(this.Product,this.file).subscribe(respone=>{
    this.form.patchValue({
      NameAr:'',
      NameEn:'',
      Tax : 0,
      Price : 0,
      CategoryId : 0,
     BrandsId : 0,
      DescriptionAr:'',
      DescriptionEn:'',
      
      Avilability:''
  
    })
    
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
}
