import { Component } from '@angular/core';
import { ListService } from './wiki.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent {
  title: string = "Assignment 15.3"

  constructor( ){
    
      }

 

  //returns an array of string results
  //to be rendered in a table

}
   
