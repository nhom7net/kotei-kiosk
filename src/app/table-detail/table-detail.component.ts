import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string; 
}

interface OrderItem {
  idd: number;
  order_id: number;
  menu_item_id: number;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-table-detail',
  standalone: true,
  template: `
  `,
  imports: [RouterOutlet],
  templateUrl: './table-detail.component.html',
  styleUrl: './table-detail.component.css'
})

export class TableDetailComponent implements OnInit{
  
  MenuItems: MenuItem[] = [
    { id: 1, name: 'Rau muống xào tỏi', price: 20000, category:'Món chính'},
    { id: 2, name: 'Cơm chiên', price: 25000, category:'Món chính'},
    { id: 3, name: 'Rau muống luộc', price: 30000, category:'Món chính'},
    { id: 4, name: 'Thịt kho', price: 10000, category:'Món chính'},
    { id: 5, name: 'Gà kho', price: 40000, category:'Món chính'},
    { id: 1, name: 'Rau muống xào tỏi', price: 20000, category:'Món chính'},
    { id: 2, name: 'Cơm chiên', price: 25000, category:'Món chính'},
    { id: 3, name: 'Rau muống luộc', price: 30000, category:'Món chính'},
    { id: 4, name: 'Thịt kho', price: 10000, category:'Món chính'},
    { id: 5, name: 'Gà kho', price: 40000, category:'Món chính'},
  ]
  OrderItems: OrderItem[] = [
    { idd : 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000},
    { idd : 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000},
    { idd : 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000},
    { idd : 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000},
    { idd : 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000},
    { idd : 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000},
    { idd : 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000},
    { idd : 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000},
    { idd : 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000},
    { idd : 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000},
    { idd : 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000},
    { idd : 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000},
    { idd : 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000},
    { idd : 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000},
    { idd : 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000},
    { idd : 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000},
    { idd : 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000},
    { idd : 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000},
  ]
  
  totalOrderPrice: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalOrderPrice = this.OrderItems.reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0);
  }

}
