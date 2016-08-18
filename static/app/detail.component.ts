/**
 * Created by Troviln on 16.08.2016.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from './http.service';


@Component({
  selector: 'my-detail',
  template: `
    <div *ngIf="properti">
            <div class="img-wrap big-image-list ">
				<img width="300" height="auto" [src]="properti.images[0].image">
			</div>

			<div>
                    <a> <div class="product-title"> {{properti.name_product}}
                        </div>
                    </a>
                <div class="product-price"> {{ properti.price | currency }}
                </div>

            </div>
          <div >
                    <ul class="list-unstyled">
                      <h4>Reviews</h4>
                      <li *ngFor="let review of (properti.reviews)">
                        <blockquote class="list-reviews">
                          {{review.review}}
                          <cite class="clearfix">{{review.user}}</cite>
                        </blockquote>
                      </li>
                    </ul>
                    <ul class="list-unstyled">
                     <li *ngIf="properti.reviews==false">
                        <blockquote class="list-reviews">no reviews yet</blockquote>
                      </li>
                    </ul>
            </div>
            <input type="text" id="review" #review>
            <button (click)="onPost(review.value); ngOnInit()">Add</button>
     </div>

  `
})
export class DetailComponent implements OnInit {


  constructor(
    private heroService: HttpService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(properti => this.properti = properti);
    });
  }

    onPost(review: string) {

        this.route.params.forEach((params: Params) => {
        let id = +params['id'];

        this.heroService.Post({product_id: id, review: review})
        });
      }

  goBack() {
    window.history.back();
  }
}


