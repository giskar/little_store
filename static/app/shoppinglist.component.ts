/**
 * Created by Troviln on 06.09.2016.
 */
/**
 * Created by Troviln on 16.08.2016.
 */
import { Component, OnInit  }          from '@angular/core';

import { HttpService }  from './http.service';
import {SHOPPING_LIST} from './mock/shopping-list';



@Component({
  selector: 'my-shoppinglist',
  template: `
    		<h1>Shopping List</h1>
	<div class="list">

		<ul>
			<li *ngFor="let item of shoppingList">{{item}}
			    <button class="btn danger" type="submit" (click)="onDelete()">Delete Item</button>
			</li>
		</ul>
	</div>

  `,
  styleUrls: ['static/app/app.component.css'],

})

export class ShoppingListComponent implements OnInit {

  constructor(private httpService: HttpService) {
    this.httpService = httpService;

   }


  ngOnInit() {
   this.shoppingList = this.httpService.getAllItems();
}

    onDelete() {
    this.httpService.deleteItem(this.shoppingList);

    }


}

