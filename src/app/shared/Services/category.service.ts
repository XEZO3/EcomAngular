import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDto } from './Dto/CategoryDto';
import { categoryFilter } from './filters/categoryFilter';
import { categoryModel } from './Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = "https://localhost:7247/api/Category/"
  constructor(private http:HttpClient) { }
  GetAll(filter:categoryFilter=new categoryFilter){
var url = this.baseUrl+"GetAll?Name="+filter?.Name+"&IsAvailable="+filter?.IsAvilable+"&Description="+filter?.Description
return this.http.get<any>(url);
  }
Add(category:CategoryDto,file:any){
let url = this.baseUrl+"Add"
var formdata = new FormData()
formdata.append('file',file)
formdata.append("nameAr",category.NameAr)
formdata.append("nameEn",category.NameEn)
formdata.append("descriptionAr",category.DescriptionAr)
formdata.append("descriptionEn",category.DescriptionEn)
formdata.append("Image","empty")
formdata.append("isAvailable",String(category.isAvailable))
return this.http.post<any>(url,formdata)
}
GetById(id:number){
  let url = this.baseUrl+"GetById/"+id
  return this.http.get<any>(url)
}
Update(category:categoryModel,file:any){
  let url = this.baseUrl+"Update/"
  var formdata = new FormData()
  formdata.append("Id",String(category.Id))
  formdata.append("NameAr",category.NameAr)
  formdata.append("NameEn",category.NameEn)
  formdata.append("DescriptionAr",category.DescriptionAr)
  formdata.append("DescriptionEn",category.DescriptionEn)
  if(file !=null){
    formdata.append("file",file)
    formdata.append("Image","empty")
    }else{
      formdata.append("Image",category.Image)
    }
    formdata.append("IsAvailable",category.isAvailable)
  return this.http.put<any>(url,formdata)
}
Delete(id:number){
  let url = this.baseUrl+"Delete/"+id
  return this.http.delete<any>(url)
}
}
