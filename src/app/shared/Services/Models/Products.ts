export class ProductsModel{
    Id:number
    NameAr:string
    NameEn:string
    DescriptionAr:string
    DescriptionEn:string
    ProductStateId:number
    Price:number
    Tax:number
    CategoryId:number
    BrandsId:number
    name:string
    Description:string
    Image:string
    Avilability:string

    constructor(){
        
        this.Id=0;
        this.NameAr=''
        this.DescriptionAr=''
        this.NameEn=''
        this.DescriptionEn=''
        this.name=''
        this.Description=''
        this.Price=0
        this.Tax=0
        this.BrandsId=0
        this.CategoryId=0
        this.ProductStateId=0
        this.Image=''
        this.Avilability=''
    }
}