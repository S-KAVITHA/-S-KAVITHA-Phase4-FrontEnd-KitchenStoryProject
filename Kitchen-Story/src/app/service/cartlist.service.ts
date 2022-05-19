import { ProductService } from 'src/app/service/product.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
//import { cartitem } from 'src/app/model/product.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  //getters
  getProducts() {
    console.log(this.cartItemList);
    return this.productList.asObservable();

    // console.log(this.url);
    // return this.httpClient.get(this.url);

  }

  // setters
  setProduct(product: any) {

    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  // add CartItems
  addtoCart(product: any) {

    const cartObj = this.cartItemList.find((element: any) => element.id === product.id);

    console.log(cartObj);


    if (cartObj) {
      console.log(" available" + cartObj.price);
      let storeIndex = this.cartItemList.findIndex((e: any) => e.id == product.id);
      console.log(storeIndex);
      this.cartItemList[storeIndex].quantity = +this.cartItemList[storeIndex].quantity + +1;
      this.cartItemList[storeIndex].total = this.cartItemList[storeIndex].quantity * cartObj.price;

    } else {
      console.log("not avail");
      this.cartItemList.push(product);     
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);


  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal = +grandTotal + + a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {

    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {

        this.cartItemList.splice(index, 1);
      }
    })

  }

  removeAllItems() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
