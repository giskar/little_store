/**
 * Created by Troviln on 15.08.2016.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

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

  // Add new Hero
  //Post(hero: {product_id: number, review: string}): Observable<any> {
  //  const body = hero;
  //  let headers = new Headers({
  //    'Content-Type': 'application/json'});
  //
  //  return this.http
  //             .post('http://127.0.0.1:8000/api/reviews/', body, {headers: headers})
  //             .toPromise()
  //             .then(res => res.json().data)
  //             .catch(this.handleError);
  //}

    Post(hero:{product_id: number, review: string}): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://127.0.0.1:8000/api/reviews/', JSON.stringify(hero || null ), {headers: headers})
            .toPromise()
            .then(res => res.json().data);
  }

}
