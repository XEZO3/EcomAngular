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
  file:any
  form=this.fb.group({
    NameAr:'',
    NameEn:'',
    Image:'',
    IsAvilable:''
  })
  Brand:BrandModel= new BrandModel
  constructor(private fb:FormBuilder,private brand:BrandsService,private _Activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.BrandId=this._Activatedroute.snapshot.paramMap.get("id");
    this.GetById()
  }
  selecter(e:any){
    this.file =e.target.files[0]
  }
  GetById(){
    this.brand.GetById(this.BrandId).subscribe(respone=>{
      this.Brand.Id = respone.result.id
      this.Brand.NameAr = respone.result.nameAr
      this.Brand.NameEn = respone.result.nameEn
      this.Brand.Image = respone.result.image
      this.Brand.IsAvailable = String(respone.result.isAvailable)
      console.log(respone.result)
      this.form.patchValue({
        NameAr:this.Brand.NameAr,
        NameEn:this.Brand.NameEn,
        Image:this.Brand.Image,
        IsAvilable:this.Brand.IsAvailable
      })
    })
  }
  Update(){
  this.Brand.NameAr = this.form.value.NameAr as string
  this.Brand.NameEn = this.form.value.NameEn as string
 
  this.Brand.Image = this.form.value.Image as string
  this.Brand.IsAvailable = this.form.value.IsAvilable as string
  this. brand.Update(this.Brand,this.file).subscribe(respone=>{
    this.form.patchValue({
      NameAr:respone.result.nameAr,
      NameEn:respone.result.nameEn,
      Image:respone.result.image,
      IsAvilable:String(respone.result.isAvailable)
  
    })
    
  })
  }
}
