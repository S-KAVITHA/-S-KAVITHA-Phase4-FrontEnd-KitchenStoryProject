import { variable } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class BuyerAuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isAccessible:any;

  get isLoggedIn() {
    const userSignIn = sessionStorage.getItem('UserSignIn');
    console.log("auth rtn");
    
    console.log(userSignIn);
    if (userSignIn == 'true') {
      this.loggedIn.next(true);
      console.log(this.loggedIn.asObservable());
    }
    console.log(this.loggedIn.asObservable());
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}
  
  
  login(user: User) {
   
    const userGetRole =  sessionStorage.getItem('userRole');
    console.log("Get Role"+ userGetRole);
   if (userGetRole === 'user' ) {
      this.isAccessible = 'true';
   }

    if (user.userName !== '' && user.password !== '' && this.isAccessible === 'true' ) {
      this.loggedIn.next(true);
      sessionStorage.setItem("UserSignIn", 'true');
      this.router.navigate(['/home']);
    }
  }

  /*getRole() {
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }*/

  logout() {
    this.loggedIn.next(false);
    sessionStorage.setItem("UserSignIn", 'false');
    this.router.navigate(['/buyerlogin']);
  }
}
