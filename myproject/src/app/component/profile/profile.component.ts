import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/service/test.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users :any;
  getid:any;
  
  constructor(public myservises:TestService,public myactive:ActivatedRoute) {
    this.getid=this.myactive.snapshot.params['id'];
    console.log(this.getid)
   }

  ngOnInit(): void {
   
    this.myservises.getAllUsers().subscribe(
      (response) =>{
        this.users = response;
        console.log(this.users)
      }
    );
  
    }
  }


