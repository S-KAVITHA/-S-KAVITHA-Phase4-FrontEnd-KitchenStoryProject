import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom-webapp';
  public isAccessible:any;

  constructor(private router:Router) {     }

  ngOnInit() {
  
    
    }
}
