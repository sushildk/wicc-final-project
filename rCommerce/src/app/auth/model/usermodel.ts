export class User{
    _id:string
    firstName:string;
    lastName:string;
    Email:string;
    phoneNumber:string;
    gender:string;
    address:string;
    role:string;
    constructor(details:any){
        this._id =details._id || '';

        this.firstName =details.firstName || '';
        this.lastName = details.lastName || '';
        this.Email = details. Email || '';
        this.phoneNumber = details. phoneNumber || '';
        this.gender = details.gender || '';
        this.role = details.role || '';
        this.address=details.address || '';


    }
}