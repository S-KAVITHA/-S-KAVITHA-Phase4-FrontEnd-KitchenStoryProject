import { Observable } from 'rxjs';
import { BuyerAuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-buyernavbar',
  templateUrl: './buyernavbar.component.html',
  styleUrls: ['./buyernavbar.component.css']
})
export class BuyerNavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  public isAccessible: any;
  public searchTerm: string = '';
     public searchFilter: any = '';

  constructor(private router: Router, private authService: BuyerAuthService, private userSrv: UserService) { }

  ngOnInit() {

    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log("sucess buyernavbar");
  }

  onSearch(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchFilter);
    this.router.navigateByUrl("/buyproducts");

  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }

  onLogout() {
    this.authService.logout();
    console.log("clear Role" + sessionStorage.getItem('userRole'));
  }

}
