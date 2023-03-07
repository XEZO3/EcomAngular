import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { BrandModel } from 'src/app/shared/Services/Models/Brands';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent {
  BrandId:any
  form=this.fb.group({
    NameAr:'',
    NameEn:'',
    Image:'',
    IsAvilable:true
  })
  Brand:BrandModel= new BrandModel
  constructor(private fb:FormBuilder,private brand:BrandsService,private _Activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.BrandId=this._Activatedroute.snapshot.paramMap.get("id");
    this.GetById()
  }
  GetById(){
    this.brand.GetById(this.BrandId).subscribe(respone=>{
      this.Brand.Id = respone.result.id
      this.Brand.NameAr = respone.result.nameAr
      this.Brand.NameEn = respone.result.nameEn
      this.Brand.Image = respone.result.image
      this.Brand.isAvailable = respone.result.isAvilable
      this.form.patchValue({
        NameAr:this.Brand.NameAr,
        NameEn:this.Brand.NameEn,
        Image:this.Brand.Image,
        IsAvilable:this.Brand.isAvailable
      })
    })
  }
  Update(){
  this.Brand.NameAr = this.form.value.NameAr as string
  this.Brand.NameEn = this.form.value.NameEn as string
 
  this.Brand.Image = this.form.value.Image as string
  this.Brand.isAvailable = this.form.value.IsAvilable as boolean
  this. brand.Update(this.Brand).subscribe(respone=>{
    this.form.patchValue({
      NameAr:respone.result.nameAr,
      NameEn:respone.result.nameEn,
      Image:respone.result.image,
      IsAvilable:respone.result.isAvilable
  
    })
    
  })
  }
}
