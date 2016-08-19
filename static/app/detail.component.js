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
var DetailComponent = (function () {
    function DetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current = this.current || 0;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroService.getHero(id)
                .then(function (properti) { return _this.properti = properti; });
        });
    };
    DetailComponent.prototype.onPost = function (review) {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroService.Post({ product_id: id, review: review });
        });
    };
    DetailComponent.prototype.setCurrent = function (index) {
        this.current = index || 0;
        //console.log(this.current);
    };
    DetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'my-detail',
            template: "\n    <div *ngIf=\"properti\" class=\"product-container\">\n        <div class=\"gallery\">\n            <div class=\"img-wrap big-image-list \">\n\t\t\t\t<img width=\"300\" height=\"auto\" [src]=\"properti.images[current].image\">\n\t\t\t</div>\n             <ul class=\"img-thumbnails clearfix small-image-list\">\n                      <li class='small-image thumbnail' *ngFor=\"let image of properti.images; let i = index\" >\n                      <img (click)=\"setCurrent(i)\" [src]=\"image.image\" >\n                      </li>\n             </ul>\n        </div>\n\n\n\t\t\t<div>\n                    <a> <div class=\"product-title\"> {{properti.name_product}}\n                        </div>\n                    </a>\n                <div class=\"product-price\"> {{ properti.price | currency }}\n                </div>\n\n            </div>\n          <div >\n                    <ul class=\"list-unstyled\">\n                      <h4>Reviews</h4>\n                      <li *ngFor=\"let review of (properti.reviews)\">\n                        <blockquote class=\"list-reviews\">\n                          {{review.review}}\n                          <cite class=\"clearfix\">{{review.user}}</cite>\n                        </blockquote>\n                      </li>\n                    </ul>\n                    <ul class=\"list-unstyled\">\n                     <li *ngIf=\"properti.reviews==false\">\n                        <blockquote class=\"list-reviews\">no reviews yet</blockquote>\n                      </li>\n                    </ul>\n            </div>\n\n             <div>\n                 <fieldset class=\"form-group\">\n                    <textarea  class=\"form-control\" placeholder=\"Write a short review of the product...\" title=\"Review\"\n                    type=\"text\"   id=\"review\" #review></textarea>\n                 </fieldset>\n                 <button class=\"btn\"  (click)=\"onPost(review.value); ngOnInit()\">Add</button>\n             </div>\n     </div>\n\n  "
        })
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map