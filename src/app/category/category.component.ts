import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: any = [
    {icon: 'favorite', path:'/list'},
    {icon: 'shopping_cart', path:'/list'},
    {icon: 'build', path:'/list'},
    {icon: 'eco', path:'/list'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
