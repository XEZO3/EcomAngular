export class categoryModel{
    Id:number
    NameAr:string
    NameEn:string
    DescriptionAr:string
    DescriptionEn:string
    name:string
    Description:string
    Image:string
    isAvailable:string

    constructor(){
        
        this.Id=0;
        this.NameAr=''
        this.DescriptionAr=''
        this.NameEn=''
        this.DescriptionEn=''
        this.name=''
        this.Description=''
        this.Image=''
        this.isAvailable=''
    }
}