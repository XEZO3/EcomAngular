export class categoryModel{
    Id:number
    NameAr:string
    NameEn:string
    DescriptionAr:string
    DescriptionEn:string
    Name:string
    Description:string
    Image:string
    isAvailable:boolean

    constructor(){
        
        this.Id=0;
        this.NameAr=''
        this.DescriptionAr=''
        this.NameEn=''
        this.DescriptionEn=''
        this.Name=''
        this.Description=''
        this.Image=''
        this.isAvailable=true
    }
}