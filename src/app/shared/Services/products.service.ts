import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDto } from './Dto/ProductDto';
import { ProductFilter } from './filters/ProductsFilter';
import { ProductsModel } from './Models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = "https://localhost:7247/api/Product/"
  constructor(private http:HttpClient) { }
  GetAll(filter:ProductFilter =new ProductFilter){
   var url = this.baseUrl+"GetAll?Name="+filter?.name+"&Description="+filter?.Description+"&Avilability="+filter?.Avilability
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
  Add(product:ProductDto,file:any){
    let url = this.baseUrl+"Add/"
    let formdata = new FormData
    formdata.append('file',file)
  formdata.append('NameAr',product.NameAr)
  formdata.append('NameEn',product.NameEn)
  formdata.append('descriptionAr',product.DescriptionAr)
  formdata.append('descriptionEn',product.DescriptionEn)
  formdata.append('tax',String(product.Tax))
  formdata.append('Price',String(product.Price))
  formdata.append('CategoryId',"1")
  formdata.append('BrandsId',"1")
  formdata.append('image',"1")
  formdata.append('Avilability',"1")
    return this.http.post<any>(url,formdata)
  }
  GetCartItem(local:any){
    let url = this.baseUrl+"GetCartItem/"
    
    var formdata= new FormData()
    formdata.append('cart',String(local))
   
    return this.http.post<any>(url,
     formdata
    )
  }
}
