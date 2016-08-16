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

			<div class="product-title-bot">
                    <a (click)="onSelect(hero)"> <div class="product-title"> {{properti.name_product}}
                        </div>
                    </a>
                <div class="product-price"> {{ properti.price | currency }}
                </div>
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
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(properti => this.properti = properti);
    });
  }

  goBack() {
    window.history.back();
  }
}
