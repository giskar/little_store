/**
 * Created by Troviln on 16.08.2016.
 */
import { Component, OnInit  }          from '@angular/core';

import { HttpService }  from './http.service';

import { Router } from '@angular/router';


@Component({
  selector: 'my-list',

  template: `
    <div class="cl1" *ngFor="let properti of properties" >
            <div class="img-wrap big-image-list ">
				<img width="300" height="auto" [src]="properti.images[0].image">
			</div>

			<div class="product-title-bot">
                    <a (click)="gotoDetail(properti)"> <div class="product-title"> {{properti.name_product}}
                        </div>
                    </a>
                <div class="product-price"> {{ properti.price | currency }}
                </div>
            </div>

    </div>

  `,
  styleUrls: ['static/app/app.component.css'],

})

export class ListComponent implements OnInit {

  constructor(private httpService: HttpService ,router: Router) {
    this.httpService = httpService;
    this.router = router;
   }


  ngOnInit() {
   this.httpService.findAll().then(data => this.properties = data );
}

    gotoDetail(properti) {
        let link = ['/detail', properti.id];
        this.router.navigate(link);
      }

}

