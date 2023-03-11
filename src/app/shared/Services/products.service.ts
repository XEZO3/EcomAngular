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
  Update(product:ProductsModel,file:any){
    let url = this.baseUrl+"Update/"
    let formdata = new FormData
   
  formdata.append('NameAr',product.NameAr)
  formdata.append('NameEn',product.NameEn)
  formdata.append('descriptionAr',product.DescriptionAr)
  formdata.append('descriptionEn',product.DescriptionEn)
  formdata.append('tax',String(product.Tax))
  formdata.append('Price',String(product.Price))
  formdata.append('CategoryId',String(product.CategoryId))
  formdata.append('BrandsId',String(product.BrandsId))
  if(file !=null){
    formdata.append("file",file)
    formdata.append("Image","empty")
    }else{
      formdata.append("Image",product.Image)
    }
  
  formdata.append('Avilability',String(product.Avilability)) 
  
    return this.http.put<any>(url,formdata)
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
  formdata.append('CategoryId',String(product.CategoryId))
  formdata.append('BrandsId',String(product.BrandsId))
  formdata.append('image',"empty")
  formdata.append('Avilability',String(product.Avilability))
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
