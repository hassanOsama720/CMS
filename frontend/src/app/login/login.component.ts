import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('', '');
  constructor(public authService: AuthService, public router:Router) {}

  login() {
    this.authService.login(this.user).subscribe((a) => {
      console.log('login:', a);
      localStorage.setItem("token",(<any>a).token);
      this.authService.isLogged = true ;
      this.router.navigateByUrl('home');

    });
  }

  ngOnInit(): void {}
}
