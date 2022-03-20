import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Model/iproduct';

@Component({
  selector: 'app-tableproduct',
  templateUrl: './tableproduct.component.html',
  styleUrls: ['./tableproduct.component.css']
})
export class TableproductComponent implements OnInit {
  totalprice:any=0;
  count:number=0;
  constructor() { }
 @Input() arrproduct:Iproduct[]=[]
  ngOnInit(): void {
  }
  buyproduct(pricee:number,quan:string){
    if(quan!=""&&parseInt(quan)>0){
  this.totalprice+=pricee*parseInt(quan);
  this.count+=parseInt(quan);
    }
  }
}
