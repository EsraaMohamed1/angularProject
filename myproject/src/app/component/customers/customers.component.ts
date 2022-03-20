import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  imgsrc: string = ''
  // imgcout:any=[1,2,3,4,5,6,7,8,9,10,11]
  imgarr: any = ['assets/pic1.jpeg', 'assets/pic2.jpeg', 'assets/pic3.jpg', 'assets/pic4.jpg', 'assets/pic5.jpg',
    'assets/pic6.jpg', 'assets/pic7.jpg', 'assets/pic8.jpg', 'assets/pic9.jpg', 'assets/pic10.jpg'
  ]
  users: any;
  getid: any;

  constructor(public myservises: TestService, public myactive: ActivatedRoute) {
    this.getid = this.myactive.snapshot.params['id'];
    console.log(this.getid)
  }

  ngOnInit(): void {
    this.myservises.getUserById(this.getid).subscribe(
      (response) => {
        this.users = response;
        if (this.getid == 1) {
          this.imgsrc = this.imgarr[0];
        }
        else if (this.getid == 2) {
          this.imgsrc = this.imgarr[1];
        }
        else if (this.getid == 3) {
          this.imgsrc = this.imgarr[2];
        }
        else if (this.getid == 4) {
          this.imgsrc = this.imgarr[3];
        }
        else if (this.getid == 5) {
          this.imgsrc = this.imgarr[4];
        }
        else if (this.getid == 6) {
          this.imgsrc = this.imgarr[5];
        }
        else if (this.getid == 7) {
          this.imgsrc = this.imgarr[6];
        }
        else if (this.getid == 8) {
          this.imgsrc = this.imgarr[7];
        }
        else if (this.getid == 9) {
          this.imgsrc = this.imgarr[8];
        }
        else if (this.getid == 10) {
          this.imgsrc = this.imgarr[9];
        }

        // switch (this.getid) {

        //   case 1:
        //     this.imgsrc = this.imgarr[0];
        //     break;
        //   case 2:
        //     this.imgsrc = this.imgarr[1];
        //     break;
        //   case 3:
        //     this.imgsrc = this.imgarr[2];
        //     break;
        //   case 4:
        //     this.imgsrc = this.imgarr[3];
        //     break;
        //   case 5:
        //     this.imgsrc = this.imgarr[4];
        //     break;
        //   case 6:
        //     this.imgsrc = this.imgarr[5];
        //     break;
        //   case 7:
        //     this.imgsrc = this.imgarr[6];
        //     break;
        //   case 8:
        //     this.imgsrc = this.imgarr[7];
        //     break;
        //   case 9:
        //     this.imgsrc = this.imgarr[8];
        //     break;
        //   case 10:
        //     this.imgsrc = this.imgarr[9];
        //     break;

        // }


        console.log(this.users)
        console.log(this.users.phone)
      },
      (error) => { }
    );


  }

}
