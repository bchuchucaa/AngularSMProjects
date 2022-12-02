import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] =
    [
      {
        id: 0,
        title: 'manzana',
        precio: 10.5,
        quantity: 2,
        completed: false
      },
      {
        id: 2,
        title: 'pan',
        precio: 0.15,
        quantity: 10,
        completed: true
      },
      {
        id: 3,
        title: 'casaca',
        precio: 200.15,
        quantity: 10,
        completed: true
      }
    ];

  constructor() { }

  getItems = () => {

    return this.items;
  }

  addItem = (item: Item) => {
    this.items.unshift(item);
    console.log('item added')
  }

}
