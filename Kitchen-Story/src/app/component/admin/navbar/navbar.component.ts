import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log("sucess navbar");
   
  }
  onLogout() {
    this.authService.logout();
    sessionStorage.removeItem("userRole");
    console.log("clear Role"+ sessionStorage.getItem('userRole'));
  }

}
