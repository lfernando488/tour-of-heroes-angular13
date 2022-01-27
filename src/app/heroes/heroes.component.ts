import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 hero : Hero = {
   id: 1,
   name: "Iron Man",
   gender: "Male",
   country: "USA",
   power: "Tecnology, Engineering"
 }



}
