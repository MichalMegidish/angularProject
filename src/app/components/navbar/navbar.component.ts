import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private us:UsersService, private router: Router) { }

  ngOnInit(): void {}
     logout() {
    this.us
      .logout()
      .then(() => {
        this.us.setSessionData('isLoggedIn', 'false') 
        this.router.navigateByUrl('login');
      })
      .catch((err) => {
        console.log(err);
      });
  }


checkLogin(){
    return this.us.getSessionData('isLoggedIn') == 'true'
  }

  getUsername():string{
    return this.us.getSessionData('username')
  }

}
  

