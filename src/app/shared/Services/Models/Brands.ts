export class BrandModel{
    Id:number
    NameAr:string
    NameEn:string  
    Name:string
    Image:string
    isAvailable:boolean

    constructor(){  
        this.Id=0;
        this.NameAr=''
        this.NameEn=''
        this.Name=''
        this.Image=''
        this.isAvailable=true
    }
}