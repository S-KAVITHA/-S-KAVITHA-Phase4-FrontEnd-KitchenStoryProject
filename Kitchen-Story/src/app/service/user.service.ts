import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:3000/users";


 
  // Get all Users
  public getUsers() {
    return this.httpClient.get(this.url);
  }

  // Get One User
  public getUser(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  // Get One User by email
  public getUserByEmail(email: string) {
    console.log((`${this.url}?email=${email}`));
    console.log(this.httpClient.get(`${this.url}?email=${email}`));
    return this.httpClient.get(`${this.url}?email=${email}`);
  }

  

    // add User
  public addUser(user: any) {
    return this.httpClient.post(this.url, user);
  }

  // update user
  public updateUser(user: any) {
    return this.httpClient.put(`${this.url}/${user.id}`, user);
  }
  // delete user
  public deleteUser(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
