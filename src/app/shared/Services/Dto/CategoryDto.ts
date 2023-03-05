export class CategoryDto{
    
    NameAr:string
    NameEn:string
    DescriptionAr:string
    DescriptionEn:string
    Image:string
    isAvailable:boolean

    constructor(){
      
        this.NameAr=''
        this.DescriptionAr=''
        this.NameEn=''
        this.DescriptionEn=''
        this.Image=''
        this.isAvailable=true
    }
}