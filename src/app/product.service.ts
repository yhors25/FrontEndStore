import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(){
    return this.products
  }

  getProduct(i:number){
    return this.products[i]
  }

  products = [
    {
      url: '../assets/img/1.jpg',
      descripcion: 'VueJS',
      precio: 25,
    },
    {
      url: '../assets/img/2.jpg',
      descripcion: 'AngularJS',
      precio: 25,
    },
    {
      url: '../assets/img/3.jpg',
      descripcion: 'ReactJS',
      precio: 25,
    },
    {
      url: '../assets/img/4.jpg',
      descripcion: 'Redux',
      precio: 25,
    },
    {
      url: '../assets/img/5.jpg',
      descripcion: 'Node',
      precio: 25,
    },
    {
      url: '../assets/img/6.jpg',
      descripcion: 'SASS',
      precio: 25,
    },
    {
      url: '../assets/img/7.jpg',
      descripcion: 'HTML5',
      precio: 25,
    },
    {
      url: '../assets/img/8.jpg',
      descripcion: 'Github',
      precio: 25,
    },
    {
      url: '../assets/img/9.jpg',
      descripcion: 'BulmaCSS',
      precio: 25,
    },
    {
      url: '../assets/img/10.jpg',
      descripcion: 'TypeScript',
      precio: 25,
    },
    {
      url: '../assets/img/11.jpg',
      descripcion: 'Drupal',
      precio: 25,
    },
    {
      url: '../assets/img/12.jpg',
      descripcion: 'JavaScript',
      precio: 25,
    },
    {
      url: '../assets/img/13.jpg',
      descripcion: 'GraphQL',
      precio: 25,
    },
    {
      url: '../assets/img/14.jpg',
      descripcion: 'WordPress',
      precio: 25,
    },
  ];
}
