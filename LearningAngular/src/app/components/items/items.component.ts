import { Component } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  items: Item[] = [];

  total: number = 0;


  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();

    this.getTotal();
  }

  deleteItem = (itemDelete: Item) => {
    this.items = this.items.filter(item => item.id != itemDelete.id);
    this.getTotal();
  }

  getTotal = () => {
    this.total = this.items
      .filter(item => !item.completed)
      .map(item => item.quantity * item.precio)
      .reduce((acc, item) => acc += item, 0);

  }

  toggleItem = (item: Item) => {
    this.getTotal();

  }

}
