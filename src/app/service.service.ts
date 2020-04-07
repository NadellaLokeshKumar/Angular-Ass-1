import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  fireBaseUrl = 'https://ito-ass-1.firebaseio.com/';

  constructor(private http: HttpClient) {
  }

  add(data) {
    console.log(`service`, data);
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.fireBaseUrl}/users.json`, data);    /* .json only for firebase.For remaining databases it is not required(only users is enough)*/
  }

  getUsers() {
    return this.http.get(`${this.fireBaseUrl}/users.json`).pipe(
      map(data => {
        // tslint:disable-next-line: no-shadowed-variable
        const newArray = [];
        // tslint:disable-next-line: forin
        for (const key in data) {
          newArray.push({...data[key], id : key});
        }
        return newArray;
      })
    );
  }

  getUser(id) {
    return this.http.get(`${this.fireBaseUrl}/users/${id}.json`);
  }

  updateUser(id, data) {
    return this.http.put(`${this.fireBaseUrl}/users/${id}.json`, data);
  }
  deleteUser(id) {
    return this.http.delete(`${this.fireBaseUrl}/users/${id}.json`);
  }
}
