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
Add(category:CategoryDto){
let url = this.baseUrl+"Add"
return this.http.post<any>(url,{
  
    nameAr: category.NameAr,
    nameEn:category.NameEn,
    descriptionAr: category.DescriptionAr,
    descriptionEn: category.DescriptionEn,
    image: category.Image,
    isAvailable: category.isAvailable
  
})
}
GetById(id:number){
  let url = this.baseUrl+"GetById/"+id
  return this.http.get<any>(url)
}
Update(category:categoryModel){
  let url = this.baseUrl+"Update/"
  return this.http.put<any>(url,{
    id:category.Id,
    nameAr: category.NameAr,
    nameEn: category.NameEn,
    descriptionAr: category.DescriptionAr,
    descriptionEn: category.DescriptionEn,
    image: category.Image,
    isAvailable: category.isAvailable
  })
}
Delete(id:number){
  let url = this.baseUrl+"Delete/"+id
  return this.http.delete<any>(url)
}
}
