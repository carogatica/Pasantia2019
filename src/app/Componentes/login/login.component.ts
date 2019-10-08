import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router) {

  }
  ngOnInit() {

  }
  sendData() {
    this.authService.doGoogleLogin().then(res => {
      if(res) {
        this.router.navigate(['/experiencias']);
      }
    });
    console.log('estos son los datos del form');
  }

}
