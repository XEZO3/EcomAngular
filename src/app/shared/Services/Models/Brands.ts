export class BrandModel{
    Id:number
    NameAr:string
    NameEn:string  
    name:string
    Image:string
    isAvailable:boolean

    constructor(){  
        this.Id=0;
        this.NameAr=''
        this.NameEn=''
        this.name=''
        this.Image=''
        this.isAvailable=true
    }
}