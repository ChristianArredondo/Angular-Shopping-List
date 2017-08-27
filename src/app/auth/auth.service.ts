import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService {
  token: string;

  constructor(
    private router: Router,
    private store: Store<fromAuth.State>
  ) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => [
          this.store.dispatch(new AuthActions.Signup())
        ]
      )
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.store.dispatch(new AuthActions.Login())
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
    this.store.dispatch(new AuthActions.Logout())
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

}
