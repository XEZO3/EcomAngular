import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-testo',
  templateUrl: './testo.component.html',
  styleUrls: ['./testo.component.css']
})
export class TestoComponent {
  file:any
 
  constructor(private http:HttpClient,private fb:FormBuilder) { 
  }
selecter(e:any){

  this.file =e.target.files[0]

}
upload(){ 
  let  baseUrl = "https://localhost:7247/api/Product/testo"
  let formdata = new FormData
  formdata.append('file',this.file)
  formdata.append('NameAr',"hello")
  formdata.append('NameEn',"hello")
  formdata.append('descriptionAr',"hello")
  formdata.append('descriptionEn',"hello")
  formdata.append('tax','0')
  formdata.append('Price','10')
  formdata.append('CategoryId',"1")
  formdata.append('BrandsId',"1")
  formdata.append('image',"1")
  formdata.append('Avilability',"1")
  this.http.post(baseUrl,formdata).toPromise()
}
}
