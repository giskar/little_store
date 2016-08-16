"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Troviln on 16.08.2016.
 */
var core_1 = require('@angular/core');
var ListComponent = (function () {
    function ListComponent(httpService, router) {
        this.httpService = httpService;
        this.httpService = httpService;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.findAll().then(function (data) { return _this.properties = data; });
    };
    ListComponent.prototype.gotoDetail = function (properti) {
        var link = ['/detail', properti.id];
        this.router.navigate(link);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'my-list',
            template: "\n    <div class=\"cl1\" *ngFor=\"let properti of properties\" >\n            <div class=\"img-wrap big-image-list \">\n\t\t\t\t<img width=\"300\" height=\"auto\" [src]=\"properti.images[0].image\">\n\t\t\t</div>\n\n\t\t\t<div class=\"product-title-bot\">\n                    <a (click)=\"gotoDetail(properti)\"> <div class=\"product-title\"> {{properti.name_product}}\n                        </div>\n                    </a>\n                <div class=\"product-price\"> {{ properti.price | currency }}\n                </div>\n            </div>\n\n    </div>\n\n  ",
            styleUrls: ['static/app/app.component.css']
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.coponent.js.map