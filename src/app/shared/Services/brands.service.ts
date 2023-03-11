import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { brandDto } from './Dto/BrandDto';
import { BrandFilter } from './filters/BrandFilter';
import { BrandModel } from './Models/Brands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  baseUrl = "https://localhost:7247/api/Brands/"
  constructor(private http:HttpClient) { }
  GetAll(brand:BrandFilter= new BrandFilter){
var url = this.baseUrl+"GetAll?Name="+brand.Name+"&IsAvailable="+brand.IsAvilable
return this.http.get<any>(url);
  }
  GetById(id:number){
    var url = this.baseUrl+"GetById/"+id
    return this.http.get<any>(url);
  }
  Update(brand:BrandModel,file:any){
    let url = this.baseUrl+"Update/"
    var formdata =  new FormData()
    formdata.append("Id",String(brand.Id))
    formdata.append("NameAr",brand.NameAr)
    formdata.append("NameEn",brand.NameEn)
    if(file !=null){
    formdata.append("file",file)
    formdata.append("Image","empty")
    }else{
      formdata.append("Image",brand.Image)
    }
    
    formdata.append("IsAvailable",brand.IsAvailable)
  return this.http.put<any>(url,formdata)
  }
  Add(Brand:brandDto,file:any){
    let url = this.baseUrl+"Add"
    var formdata =  new FormData()
    formdata.append("NameAr",Brand.NameAr)
    formdata.append("NameEn",Brand.NameEn)
    formdata.append("Image","s")
    formdata.append("file",file)
    formdata.append("IsAvailable",Brand.IsAvailable)
    return this.http.post<any>(url,formdata)
}
Delete(id:number){
  let url = this.baseUrl+"Delete/"+id
  return this.http.delete(url)
}
}