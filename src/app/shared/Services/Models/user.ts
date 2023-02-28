import { RolesModel } from "./Roles";

export class userModel{
    // public string Name { get; set; }
    //     public string Email { get; set; }        
    //     public Roles Roles { get; set; } 
        Id:number|undefined
        Name: string|undefined;
        Email:string|undefined;
        Roles:RolesModel
        constructor(){
            this.Roles = new RolesModel
        }
}