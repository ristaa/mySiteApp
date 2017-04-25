import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
	url: string = 'http://www.milos-ristic.com/wp-json/wp/v2/posts?filter[orderby]=date&order=asc';
	items: any;

	constructor( private http: Http ) {}

	ionViewDidEnter() {
		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      
	      // Save all data to the items property of class HomePage
	      this.items = data;
	    });
	}
}