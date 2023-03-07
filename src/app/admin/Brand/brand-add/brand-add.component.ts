import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrandsService } from 'src/app/shared/Services/brands.service';
import { brandDto } from 'src/app/shared/Services/Dto/BrandDto';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent {
  form=this.fb.group({
    NameAr:'',
    NameEn:'',
    Image:'',
    IsAvilable:true
  })
  Brand:brandDto= new brandDto
  constructor(private fb:FormBuilder,private brand:BrandsService){}
  Add(){
   
  this.Brand.NameAr = this.form.value.NameAr as string
  this.Brand.NameEn = this.form.value.NameEn as string
  this.Brand.Image = this.form.value.Image as string
  this.Brand.IsAvailable = this.form.value.IsAvilable as boolean
  this.brand.Add(this.Brand).subscribe(respone=>{
    this.form.patchValue({
      NameAr:'',
      NameEn:'',
      Image:'',
      IsAvilable:true
    })
    
  })
  }
}
