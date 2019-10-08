import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
    providedIn:  'root'
})

export class DataService {
  userData: any;
  authSubscriptions: Subscription;
  constructor(public  afAuth: AngularFireAuth) {
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        console.log('el usuario');
        this.userData = res;
        resolve(res);
      });
    });
  }

  getUserData() {
    return this.userData;
  }
}
