import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Injectable()
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  onSignup (form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signupUser(email, password);
  }

}
