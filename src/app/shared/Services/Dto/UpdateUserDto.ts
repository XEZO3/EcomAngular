export class updateUserDto{
    id:number
    Name:string
    Email:string
    password:string
    roleId:number
    constructor(){
        this.id=0
        this.Name=""
        this.Email=""
        this.password=""
        this.roleId=0
        
    }
}