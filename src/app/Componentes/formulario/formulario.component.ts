import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  experienceForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private authService: AuthService,
               private router: Router, private dataService: DataService) {
    if (!this.authService.getUserLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    console.log('lo que tenemos del user', this.authService.getUserLoggedIn());
    this.experienceForm = this.formBuilder.group({
      schoolName: [''],
      companyName: [''],
      duration: [''],
      career: [''],
      experienceFeedback: [''],
      email: [this.authService.getUserLoggedIn().email],
      username: [this.authService.getUserLoggedIn().displayName]
    });
  }

  sendData() {
    this.dataService.addPost(this.experienceForm.value);
  }

}
