import { Inject,Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false ;

  constructor(public http: HttpClient,@Inject("baseURL") public baseurl:string) { 
    this.baseurl+="login";
  }

  login(user: User) {
    return this.http.post(this.baseurl,user);
  }
}
