import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDto } from './Dto/ProductDto';
import { ProductsModel } from './Models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = "https://localhost:7247/api/Product/"
  constructor(private http:HttpClient) { }
  GetAll(){
   var url = this.baseUrl+"GetAll"
   return this.http.get<any>(url);
  }
  GetById(id:number){
    let url = this.baseUrl+"GetById/"+id
    return this.http.get<any>(url)
  }
  Update(product:ProductsModel){
    let url = this.baseUrl+"Update/"
    return this.http.put<any>(url,{
      id:product.Id,
      nameAr: product.NameAr,
      nameEn: product.NameEn,
      descriptionAr: product.DescriptionAr,
      descriptionEn: product.DescriptionEn,
      tax:product.Tax,
      price:product.Price,
      CategoryId:product.CategoryId,
      BrandsId:product.BrandsId,
      image: product.Image,
      Avilability: product.Avilability
    })
  }
  Add(product:ProductDto){
    let url = this.baseUrl+"Add/"
    return this.http.post<any>(url,{
      nameAr: product.NameAr,
      nameEn: product.NameEn,
      descriptionAr: product.DescriptionAr,
      descriptionEn: product.DescriptionEn,
      tax:product.Tax,
      price:product.Price,
      CategoryId:product.CategoryId,
      BrandsId:product.BrandsId,
      image: product.Image,
      Avilability: product.Avilability
    })
  }
}
