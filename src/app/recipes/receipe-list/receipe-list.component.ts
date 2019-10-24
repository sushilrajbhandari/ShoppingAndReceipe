import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  receipes: Recipe [] = [
    new Recipe(' A Test Receipe', 'This is Simply a test receipe', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2019%2F01%2F043196e4e03dd6c7789567d460494b0373f0c9ab.jpeg'),
    new Recipe(' A Test Receipe', 'This is Simply a test receipe', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2019%2F01%2F043196e4e03dd6c7789567d460494b0373f0c9ab.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
