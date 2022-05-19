import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cartlist.service';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
  })

export class OrderComponent implements OnInit {

	public products : any = [];
	public grandTotal !: number ;

	constructor(
		
	) { }

	ngOnInit() {
	
	}
	
}