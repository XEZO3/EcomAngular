import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { CategoryService } from 'src/app/shared/Services/category.service';
import { BrandModel } from 'src/app/shared/Services/Models/Brands';
import { categoryModel } from 'src/app/shared/Services/Models/Category';
import { ProductsModel } from 'src/app/shared/Services/Models/Products';
import { ProductsService } from 'src/app/shared/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  Product_Id:any
  Category:any
  file:any
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
    Image:'',
    Avilability:''
  })
  Product:ProductsModel= new ProductsModel
  constructor(private fb:FormBuilder,private category:CategoryService,private _Activatedroute:ActivatedRoute,private product:ProductsService,private brand:BrandsService){}
  ngOnInit(): void {
    this.Product_Id=this._Activatedroute.snapshot.paramMap.get("id");
    this.GetById();
    this.GetCategory()
    this.GetBrands()

  }
  selecter(e:any){
    this.file =e.target.files[0]
  }
  GetById(){
    this.product.GetById(this.Product_Id).subscribe(respone=>{
      this.Product.Id = respone.result.id
      this.Product.NameAr = respone.result.nameAr
      this.Product.NameEn = respone.result.nameEn
      this.Product.DescriptionAr = respone.result.descriptionAr
      this.Product.DescriptionEn = respone.result.descriptionEn
      this.Product.Tax = respone.result.tax
      this.Product.Price = respone.result.price
      this.Product.CategoryId = Number(respone.result.categoryId)
      this.Product.BrandsId = Number(respone.result.brandsId)
      this.Product.Image = respone.result.image
      this.Product.Avilability = respone.result.avilability
      this.currentBrand=respone.result.brands.name
      this.currentCategory=respone.result.category.name
      this.form.patchValue({
        NameAr:this.Product.NameAr,
        NameEn:this.Product.NameEn,
        Tax:this.Product.Tax,
        Price:this.Product.Price,
        BrandsId:this.Product.BrandsId,
        CategoryId:this.Product.CategoryId,
        DescriptionAr:this.Product.DescriptionAr,
        DescriptionEn:this.Product.DescriptionEn,
        Image:this.Product.Image,
        Avilability:this.Product.Avilability
      })
    })
  }
  Update(){
    
  this.Product.NameAr = this.form.value.NameAr as string
  this.Product.NameEn = this.form.value.NameEn as string
  this.Product.DescriptionAr = this.form.value.DescriptionAr as string
  this.Product.DescriptionEn = this.form.value.DescriptionEn as string
  this.Product.Tax = this.form.value.Tax as number
  this.Product.Price = this.form.value.Price as number
  this.Product.CategoryId = this.form.value.CategoryId as number
  this.Product.BrandsId = this.form.value.BrandsId as number
  this.Product.Image = this.form.value.Image as string
  this.Product.Avilability = this.form.value.Avilability as string
  this.product.Update(this.Product,this.file).subscribe(respone=>{
    this.form.patchValue({
      NameAr:respone.result.nameAr,
      NameEn:respone.result.nameEn,
      Tax : respone.result.tax,
      Price : respone.result.price,
      CategoryId : respone.result.categoryId,
      BrandsId : respone.result.brandsId,
      DescriptionAr:respone.result.descriptionAr,
      DescriptionEn:respone.result.descriptionEn,
      Image:respone.result.image,
      Avilability:respone.result.avilability
  
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
