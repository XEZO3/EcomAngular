import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { brandDto } from './Dto/BrandDto';
import { BrandModel } from './Models/Brands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  baseUrl = "https://localhost:7247/api/Brands/"
  constructor(private http:HttpClient) { }
  GetAll(){
var url = this.baseUrl+"GetAll"
return this.http.get<any>(url);
  }
  GetById(id:number){
    var url = this.baseUrl+"GetById/"+id
    return this.http.get<any>(url);
  }
  Update(brand:BrandModel){
    let url = this.baseUrl+"Update/"
  return this.http.put<any>(url,{
    id:brand.Id,
    nameAr: brand.NameAr,
    nameEn: brand.NameEn,
    image: brand.Image,
    isAvailable: brand.isAvailable
  })
  }
  Add(Brand:brandDto){
    let url = this.baseUrl+"Add"
    return this.http.post<any>(url,{   
        nameAr: Brand.NameAr,
        nameEn: Brand.NameEn,    
        image: Brand.Image,
        isAvailable: Boolean(Brand.IsAvailable)
      
    })
    }
}
