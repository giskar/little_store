/**
 * Created by Troviln on 15.08.2016.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  getPost() {
      return this.http.get('http://127.0.0.1:8000/api/products').map(response => response.json());

  }
    findAll() {
   return this.http.get('http://127.0.0.1:8000/api/products')
       .toPromise()
       .then(res => res.json(), err => console.log(err));

}

    getHero(id: number) {
    return this.findAll()
               .then(properties => properties.find(properti => properti.id === id));
  }

}
