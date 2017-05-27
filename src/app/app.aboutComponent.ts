import { Component } from '@angular/core';
import { ListService } from './wiki.service'
@Component({
	selector: 'about',
	template: `<h1>User List</h1>
	<div class="container">
	<div class="row">
	<div><h2>Names</h2></div>
	</div>

<div *ngFor='let list of lists'>
<div class="row">
<div class="col-md-4"><b style="color:green">{{list.name}}</b></div>
</div>
</div>
</div>
	`,
})
export class AboutComponent {
	public lists: any[] = [];
	constructor(private log: ListService) {
		this.lists=log.getList();
		console.log("Log details:");
		console.log(this.lists);
	}

	


}