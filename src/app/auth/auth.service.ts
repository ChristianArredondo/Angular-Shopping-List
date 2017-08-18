import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Route, Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthService {
  token: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => console.log('Creating new user')
      )
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  logoutUser () {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken () {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
      return this.token;
  }

  isAuthenticated () {
    return this.token != null;
  }

  // onSuccess () {
  //   this.router.navigate(['edit'], {relativeTo: this.route});
  // }
}
