"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Troviln on 15.08.2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
var shopping_list_1 = require('./mock/shopping-list');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getPost = function () {
        return this.http.get('http://127.0.0.1:8000/api/products').map(function (response) { return response.json(); });
    };
    HttpService.prototype.findAll = function () {
        return this.http.get('http://127.0.0.1:8000/api/products')
            .toPromise()
            .then(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    HttpService.prototype.getHero = function (id) {
        return this.findAll()
            .then(function (properties) { return properties.find(function (properti) { return properti.id === id; }); });
    };
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
    HttpService.prototype.Post = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://127.0.0.1:8000/api/reviews/', JSON.stringify(hero || null), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; });
    };
    HttpService.prototype.insertItems = function (items) {
        //Array.prototype.push.apply(SHOPPING_LIST, items);
        shopping_list_1.SHOPPING_LIST.push(items);
        console.log(shopping_list_1.SHOPPING_LIST);
    };
    HttpService.prototype.getAllItems = function () {
        return shopping_list_1.SHOPPING_LIST;
    };
    HttpService.prototype.deleteItem = function (item) {
        shopping_list_1.SHOPPING_LIST.splice(shopping_list_1.SHOPPING_LIST.indexOf(item), 1);
    };
    HttpService = __decorate([
        core_1.Injectable()
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map