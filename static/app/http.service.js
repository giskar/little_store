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
require('rxjs/Rx');
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
    HttpService = __decorate([
        core_1.Injectable()
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map