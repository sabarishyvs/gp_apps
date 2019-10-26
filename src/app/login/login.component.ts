import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route: Router) { 
    
  }

  ngOnInit() {
  }
  onClickSubmit(data) {
    //alert("Entered Email id : " + JSON.stringify(data)); 

    if(data.emailid=='admin' && data.passwd=='admin'){
      this.route.navigateByUrl('admin')
    }

    if(data.emailid=='user' && data.passwd=='user'){
      this.route.navigateByUrl('user')
    }
  }
} 
