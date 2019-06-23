import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  auth;
  error=false;
  registerUserData = {}
  constructor( private _auth: AuthService,
    private _router: Router ) { }

  ngOnInit() {
  }


  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.error=false;
          this.auth=true;
          setTimeout(()=>{ this._router.navigate(['/content']) }, 4000);
        },
        err => { this.error=true; }
      )
  }
}
