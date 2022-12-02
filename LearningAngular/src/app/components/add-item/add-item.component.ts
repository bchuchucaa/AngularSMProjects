import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  id: number = 0;
  title: string = "";
  precio: number = 0;
  quantity: number = 0;


  constructor(private itemService: ItemService, private router: Router) {

  }


  onSubmit = () => {
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.precio = this.precio;
    item.completed = false;
    item.quantity = this.quantity;

    this.itemService.addItem(item);

    this.router.navigate(['/'])

  }

}
