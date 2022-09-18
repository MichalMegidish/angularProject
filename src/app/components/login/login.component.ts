import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/intefaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {email:"", password :""}
  constructor(private us:UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  submitLogin(): void {
    this.us
      .login(this.user)
      .then((data) => {
        console.log(data.user.email);
        this.us.setSessionData("username", data.user.email as string)
        this.us.setSessionData("isLoggedIn", "true")
        this.router.navigateByUrl('home');
      })
      .catch((err) => {
        alert('Wrong email or password');
        this.user = { email: '', password: '' };
      });
  }


 loginWithGoogle(): void {
    this.us
      .loginWithGoogle()
      .then((data) => {
        console.log(data.user.displayName);
        this.us.setSessionData("username", data.user.displayName as string)
        sessionStorage.setItem("isLoggedIn", "true")
        this.router.navigateByUrl('home');
      })
      .catch((err) => {
        console.log(err);
        alert('Wrong google account');
      });
  }
}
