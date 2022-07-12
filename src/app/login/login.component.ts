import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private router : Router) {
    this.username =("");
    this.password =("");
   }

  ngOnInit(): void {
  }

  User(){
    if(this.username == "xyz" && this.password =="1234")
    {
      console.log("welcome");
      // alert("welcome to my page");
      this.router.navigate(['/home']);
    }
    else{
      console.log("Plese check your username or password");
      alert("Plese check your username or password")
    }
  }



}
