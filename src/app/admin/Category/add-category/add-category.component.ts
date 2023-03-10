import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/shared/Services/category.service';
import { CategoryDto } from 'src/app/shared/Services/Dto/CategoryDto';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  file:any
form=this.fb.group({
  NameAr:'',
  NameEn:'',
  DescriptionAr:'',
  DescriptionEn:'',
  Image:'',
  isAvailable:''
})
Category:CategoryDto= new CategoryDto
constructor(private fb:FormBuilder,private category:CategoryService){}
selecter(e:any){

  this.file =e.target.files[0]

}
Add(){
this.Category.NameAr = this.form.value.NameAr as string
this.Category.NameEn = this.form.value.NameEn as string
this.Category.DescriptionAr = this.form.value.DescriptionAr as string
this.Category.DescriptionEn = this.form.value.DescriptionEn as string
this.Category.Image = this.form.value.Image as string
this.Category.isAvailable = this.form.value.isAvailable as string
this.category.Add(this.Category,this.file).subscribe(respone=>{
  this.form.patchValue({
    NameAr:'',
    NameEn:'',
    DescriptionAr:'',
    DescriptionEn:'',
    Image:'',
    isAvailable:''

  })
  
})
}
}
