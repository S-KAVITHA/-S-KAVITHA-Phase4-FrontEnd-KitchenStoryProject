import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthService {
  
  private isAccessible:any;
  private AloggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
   
    const AuserSignIn = sessionStorage.getItem('AUserSignIn');
    console.log("auth rtn");
    
    console.log(AuserSignIn);
    if (AuserSignIn == 'true') {
      this.AloggedIn.next(true);
      console.log(this.AloggedIn.asObservable());
    }
    console.log(this.AloggedIn.asObservable());
    return this.AloggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  
  
  login(user: User) {
    console.log(user);
    console.log(user.userName);
    console.log(user.password);

    const userGetRole =  sessionStorage.getItem('userRole');
    console.log("Get Role"+ userGetRole);
    if (userGetRole === 'admin' ) {
      this.isAccessible = 'true';
      
     }
    if (user.userName !== '' && user.password !== '' && this.isAccessible === 'true' ) {
      this.AloggedIn.next(true);
      sessionStorage.setItem("AUserSignIn", 'true');
      console.log("success");
     // this.router.navigate(['/home']);
    }
  }

  logout() {
    this.AloggedIn.next(false);
    sessionStorage.setItem("AUserSignIn", 'false');
    this.router.navigate(['/adminlogin']);
  }
}
