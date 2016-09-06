/**
 * Created by Troviln on 16.08.2016.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from './http.service';


@Component({
  selector: 'my-detail',
  template: `
    <div *ngIf="properti" class="product-container">
        <div class="gallery">
            <div class="img-wrap big-image-list ">
				<img width="300" height="auto" [src]="properti.images[current].image">
			</div>
             <ul class="img-thumbnails clearfix small-image-list">
                      <li class='small-image thumbnail' *ngFor="let image of properti.images; let i = index" >
                      <img (click)="setCurrent(i)" [src]="image.image" >
                      </li>
             </ul>
        </div>


			<div>
                    <a> <div class="product-title"> {{properti.name_product}}
                        </div>
                    </a>
                <div class="product-price"> {{ properti.price | currency }}
                </div>

            <button class="btn"  (click)="onAddToShoppingList()">Add to shoping list</button>

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

             <div>
                 <fieldset class="form-group">
                    <textarea  class="form-control" placeholder="Write a short review of the product..." title="Review"
                    type="text"   id="review" #review></textarea>
                 </fieldset>
                 <button class="btn"  (click)="onPost(review.value); ngOnInit()">Add</button>
             </div>
     </div>

  `
})
export class DetailComponent implements OnInit {


  constructor(
    private heroService: HttpService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.current = this.current || 0 ;
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

    setCurrent(index: number) {
        this.current = index || 0;
        //console.log(this.current);

          }

    onAddToShoppingList() {
           this.heroService.insertItems(this.properti.name_product);
        //console.log(this.properti.name_product);
        }

  goBack() {
    window.history.back();
  }
}


