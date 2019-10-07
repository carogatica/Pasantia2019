import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  experienceForm: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.experienceForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
  sendData() {
    console.log('estos son los datos del form', this.experienceForm.value)
  }

}