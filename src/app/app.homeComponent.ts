import {Component} from '@angular/core';
import { ListService } from './wiki.service'
@Component({
	selector:'home',
	template:`<h1>ADD USER</h1>
	<br>
	<div class="row">
	<h3 *ngFor='let li of list' style="color:green">{{li.name}},</h3>
	</div>
	
	<input type="text" [(ngModel)]="name" name="name">
	<button type="button" (click)="Add()">ADD USER</button>
	`,
})
export class HomeComponent
{
	public name: string;
	list: any[] = [];
	constructor(private log: ListService)
	{
		
	}
	Add()
	{
		this.list.push({ name: this.name });
		this.log.AddList(this.name);
		
	}
}