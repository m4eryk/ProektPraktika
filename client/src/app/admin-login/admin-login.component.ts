import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  auth;
  error=false;
  loginUserData={};
  constructor( private _auth:AuthService,
    private _router: Router ) { }

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginAdmin(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.error=false;
          this.auth=true;
          setTimeout(()=>{ this._router.navigate(['/admin']) }, 4000);
        },
        err => { this.error=true; }
      )
  }

}
