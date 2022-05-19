import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:3000/products";

  // Get all products
  public getProducts() {
    console.log(this.url);
    return this.httpClient.get(this.url);
  }

  // Get One Product
  public getProduct(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // add product
  public addProduct(product: any) {
    return this.httpClient.post(this.url, product);
  }

  // update product
  public updateProduct(product: any) {
    return this.httpClient.put(`${this.url}/${product.id}`, product);
  }
  // delete product
  public deleteProduct(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
