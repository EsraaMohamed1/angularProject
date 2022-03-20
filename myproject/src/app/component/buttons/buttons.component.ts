import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct } from 'src/app/Model/iproduct';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() ourEvent = new EventEmitter();
  arrphones = [{ id: 1, title: "IPHONE", imagrUrl: "assets/iphone.jpg", price: 3000, quantity: 5 },
  { id: 2, title: "REDMI", imagrUrl: "assets/redmi.jpg", price: 4000, quantity: 1 },
  { id: 3, title: "OPPO", imagrUrl: "assets/oppoo.jpg", price: 5000, quantity: 10 },
  { id: 4, title: "INFINIX", imagrUrl: "assets/infinix.jpg", price: 1500, quantity: 20 }
  ]

  arrlabtop = [{ id: 1, title: "DELL", imagrUrl: "assets/lab1.jpg", price: 10000, quantity: 10 },
  { id: 2, title: "LENOVO", imagrUrl: "assets/lab2.jpg", price: 40000, quantity: 8 },
  { id: 3, title: "MAC", imagrUrl: "assets/lab3.jpg", price: 50000, quantity: 1 },
  { id: 4, title: "APPLE", imagrUrl: "assets/lab4.jpg", price: 30000, quantity: 7 }
  ]

  arrtv = [{ id: 1, title: "SAMSUNG", imagrUrl: "assets/tv1.png", price: 5000, quantity: 20 },
  { id: 2, title: "LG", imagrUrl: "assets/tv2.jpg", price: 3500, quantity: 30 },
  { id: 3, title: "SONY", imagrUrl: "assets/tv3.jpg", price: 4000, quantity: 15 },
  { id: 4, title: "TCL", imagrUrl: "assets/tv4.png", price: 8000, quantity: 40 }
  ]

  arrtablet = [{ id: 1, title: "AMAZON", imagrUrl: "assets/tab1.jpg", price: 2000, quantity: 15 },
  { id: 2, title: "LENOVO", imagrUrl: "assets/tab2.webp", price: 6000, quantity: 8 },
  { id: 3, title: "HUAWEI", imagrUrl: "assets/tab3.webp", price: 3500, quantity: 10 },
  { id: 4, title: "SAMSUNG", imagrUrl: "assets/tab4.jpg", price: 5500, quantity: 20 }
  ]
  arrproduct: Iproduct[] = this.arrphones


  constructor() { }

  ngOnInit(): void {
  }
  showphones() {
    this.arrproduct = this.arrphones
    // console.log(this.arrproduct)
    this.ourEvent.emit(this.arrproduct);
  }
  showlabtops() {

    this.arrproduct = this.arrlabtop
    this.ourEvent.emit(this.arrproduct);
  }

  showtablet() {
    this.arrproduct = this.arrtablet
    this.ourEvent.emit(this.arrproduct);
  }
  showtvs() {
    this.arrproduct = this.arrtv
    this.ourEvent.emit(this.arrproduct);
  }
}
