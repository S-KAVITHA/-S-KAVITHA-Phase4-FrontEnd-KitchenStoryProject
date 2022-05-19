import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cartlist.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-buyproducts',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class BuyProductsComponent implements OnInit {

  public products:any;
  searchKey:string= "";
  public searchFilter: any = '';
  

  // inject data service to load data
  constructor(private route: ActivatedRoute, private cartSrv: CartService,private productSrv : ProductService) { }

  ngOnInit(): void {
 
    this.getProducts();
   
  }

  public getProducts() {
    this.productSrv.getProducts().subscribe(data=>{
      console.log(data);
      this.products = data;
      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  }
  

  addtoCart(product: any){
 
    this.cartSrv.addtoCart(product);

  }
  
}
