import { Component, ElementRef, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Model/iproduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  
  
     arrproduct:Iproduct[]= [{ id: 1, title: "IPHONE", imagrUrl: "assets/iphone.jpg", price: 3000, quantity: 5 },
     { id: 2, title: "REDMI", imagrUrl: "assets/redmi.jpg", price: 4000, quantity: 1 },
     { id: 3, title: "OPPO", imagrUrl: "assets/oppoo.jpg", price: 5000, quantity: 10 },
     { id: 4, title: "INFINIX", imagrUrl: "assets/infinix.jpg", price: 1500, quantity: 20 }
     ]

     reciveData(data:{id:number;title:string; imagrUrl:string,price:number,quantity:number}[]){
       this.arrproduct=data;
     }
   
  
  
    
     
  constructor() {  
    // console.log("in construct"+this.pricee)
  }
      
 
  ngOnInit(): void {
  
console.log(this.arrproduct)



  }
 

}
