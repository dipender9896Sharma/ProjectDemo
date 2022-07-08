import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor() {
    this.username =("");
    this.password =("");
   }

  ngOnInit(): void {
  }

  User(){
    if(this.username == "xyz" && this.password =="1234")
    {
      console.log("welcome")
    }
    else{
      console.log("Plese check your username or password")
    }
  }



}
