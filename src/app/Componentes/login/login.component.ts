import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  experienceForm: FormGroup;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    /*this.experienceForm = this.formBuilder.group({
      schoolName: [''],
      companyName: [''],
      duration: ['966847516416'],
      career: ['panaderia'],
      experienceFeedback: ['']
    });*/
  }

  loginConGoogle() {
      return new Promise<any>((resolve, reject) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        })
      })
  }

}