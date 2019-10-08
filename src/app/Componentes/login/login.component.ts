import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  experienceForm: any;
  formBuilder: any;

  constructor(private autService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  sendData() {
    this.autService.doGoogleLogin().then(res => {
      if (res.user) { this.router.navigate(['/experiencias']); }
    });
  }
}
