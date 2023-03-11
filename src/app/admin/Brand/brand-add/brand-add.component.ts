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
  file:any
  form=this.fb.group({
    NameAr:'',
    NameEn:'',
    IsAvilable:''
  })
  Brand:brandDto= new brandDto
  constructor(private fb:FormBuilder,private brand:BrandsService){}
  selecter(e:any){

    this.file =e.target.files[0]
  
  }
  Add(){
   
  this.Brand.NameAr = this.form.value.NameAr as string
  this.Brand.NameEn = this.form.value.NameEn as string
  
  this.Brand.IsAvailable = this.form.value.IsAvilable as string
  this.brand.Add(this.Brand,this.file).subscribe(respone=>{
    this.form.patchValue({
      NameAr:'',
      NameEn:'',    
      IsAvilable:''
    })
    
  })
  }
}
