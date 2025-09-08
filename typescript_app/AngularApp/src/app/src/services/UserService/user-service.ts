import { HttpClient } from '@angular/common/http'; // HttpClient is imported to make HTTP calls
import { Injectable } from '@angular/core';  // injectable decorator makes the class available for dependency injection
import { Observable } from 'rxjs'; // Observable is imported to handle asynchronous data streams

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:9000/user/api/users'; // Example API endpoint (from shopping cart project)
  private createUserURL = 'http://localhost:9000/user/api/signinup';

  constructor(private http: HttpClient) { }

  // Service methods will be implemented here
  getItems() : string[] {
    return [
      'Item 1 from @Injectable UserService', 
      'Item 2 from @Injectable UserService', 
      'Item 3 from @Injectable UserService'];
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Making a GET request to the API endpoint
  }

  createNewUser(userData: any): Observable<any> {
    return this.http.post(this.createUserURL, userData); // Making a POST request to the API endpoint
  }
  
}
