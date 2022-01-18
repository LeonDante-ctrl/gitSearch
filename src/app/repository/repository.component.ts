import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
  export class RepositoryComponent implements OnInit {

  	@Input() passData:any;
	          arrayData:any;

 constructor() {
 }

  ngOnInit() {
  }

 ngOnChanges(changes: SimpleChanges) {
    if (changes['passData']) {
		this.arrayData = this.passData;
	}
  }
}