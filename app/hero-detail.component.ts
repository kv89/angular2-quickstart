import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'my-hero-detail',
	template: `
			  <div *ngIf="hero1">
			    <h2>{{hero1.name}} details!</h2>
			    <div><label>id: </label>{{hero1.id}}</div>
			    <div>
			      <label>name: </label>
			      <input [(ngModel)]="hero1.name" placeholder="name"/>
			    </div>
			  </div>
			`

})

export class HeroDetailComponent {
	@Input()
	hero1: Hero
}