import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe(' A Test Recipe', 'This is Simply a test recipe', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2019%2F01%2F043196e4e03dd6c7789567d460494b0373f0c9ab.jpeg'),
    new Recipe(' A Test Recipe', 'This is Simply a test recipe', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2019%2F01%2F043196e4e03dd6c7789567d460494b0373f0c9ab.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
