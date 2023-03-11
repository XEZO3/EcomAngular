import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/Services/category.service';
import { categoryModel } from 'src/app/shared/Services/Models/Category';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {
  CategoryId:any
  file:any
  form=this.fb.group({
    NameAr:'',
    NameEn:'',
    DescriptionAr:'',
    DescriptionEn:'',
    Image:'',
    isAvailable:''
  })
  Category:categoryModel= new categoryModel
  constructor(private fb:FormBuilder,private category:CategoryService,private _Activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.CategoryId=this._Activatedroute.snapshot.paramMap.get("id");
    this.GetById()
  }
  selecter(e:any){
    this.file =e.target.files[0]
  }
  GetById(){
    this.category.GetById(this.CategoryId).subscribe(respone=>{
      this.Category.Id = respone.result.id
      this.Category.NameAr = respone.result.nameAr
      this.Category.NameEn = respone.result.nameEn
      this.Category.DescriptionAr = respone.result.descriptionAr
      this.Category.DescriptionEn = respone.result.descriptionEn
      this.Category.Image = respone.result.image
      this.Category.isAvailable = String(respone.result.isAvailable)
      console.log(respone.result.isAvailable)
      this.form.patchValue({
        NameAr:this.Category.NameAr,
        NameEn:this.Category.NameEn,
        DescriptionAr:this.Category.DescriptionAr,
        DescriptionEn:this.Category.DescriptionEn,
        Image:this.Category.Image,
        isAvailable:String(respone.result.isAvailable)
      })
    })
  }
  Update(){
  this.Category.NameAr = this.form.value.NameAr as string
  this.Category.NameEn = this.form.value.NameEn as string
  this.Category.DescriptionAr = this.form.value.DescriptionAr as string
  this.Category.DescriptionEn = this.form.value.DescriptionEn as string
  this.Category.Image = this.form.value.Image as string
  this.Category.isAvailable = this.form.value.isAvailable as string
  this.category.Update(this.Category,this.file).subscribe(respone=>{
    this.form.patchValue({
      NameAr:respone.result.nameAr,
      NameEn:respone.result.nameEn,
      DescriptionAr:respone.result.descriptionAr,
      DescriptionEn:respone.result.descriptionEn,
      Image:respone.result.image,
      isAvailable:String(respone.result.isAvailable)
  
    })
    
  })
  }
}
