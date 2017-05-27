import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './app.homeComponent';
import { AboutComponent } from './app.aboutComponent';

const route:Routes =[
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },	

{ path: '**', component: HomeComponent },
]

export const routing= RouterModule.forRoot(route);