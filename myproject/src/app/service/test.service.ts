import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl ='https://jsonplaceholder.typicode.com'
  constructor( public myclient:HttpClient) {

   }
   getAllUsers(){
     return this.myclient.get(`${this.baseUrl}/users`)
   }
   getUserById(userId:any){
      return this.myclient.get(`${this.baseUrl}/users/${userId}`)
   }
   addUser(user:{name:string;age:number}){
     return this.myclient.post(`${this.baseUrl}/users`,user)
   }
   deleteUser(userId:any){
    return this.myclient.delete(`${this.baseUrl}/users/userId`)
  }
  editUser(userId:any,user:{name:string,age:number}){
    return this.myclient.put(`${this.baseUrl}/users/${userId}`,user)
  }

}
