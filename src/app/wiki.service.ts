import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
	list: any[] = [];
  constructor() {
  }
  AddList(name:string)
  {
	  let obj = { name: name };
	  this.list.push(obj);
	  console.log(this.list);
  }
  getList():any[]
  {
	  return this.list;
  }
}
