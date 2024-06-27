import { Component, Input, OnInit, TemplateRef, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
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
  imports: [RouterOutlet, FormsModule],
  templateUrl: './table-detail.component.html',
  styleUrl: './table-detail.component.css',
})


export class TableDetailComponent implements OnInit {
  @Input() name: any;
  private modalService = inject(NgbModal);
  id = this.route.snapshot.paramMap.get('id') || -1;
  display_name = '';
  closeResult = '';
  
  MenuItems: MenuItem[] = [
    { id: 1, name: 'Rau muống xào tỏi', price: 20000, category: 'Món chính' },
    { id: 2, name: 'Cơm chiên', price: 25000, category: 'Món chính' },
    { id: 3, name: 'Rau muống luộc', price: 30000, category: 'Món chính' },
    { id: 4, name: 'Thịt kho', price: 10000, category: 'Món chính' },
    { id: 5, name: 'Gà kho', price: 40000, category: 'Món chính' },
    { id: 1, name: 'Rau muống xào tỏi', price: 20000, category: 'Món chính' },
    { id: 2, name: 'Cơm chiên', price: 25000, category: 'Món chính' },
    { id: 3, name: 'Rau muống luộc', price: 30000, category: 'Món chính' },
    { id: 4, name: 'Thịt kho', price: 10000, category: 'Món chính' },
    { id: 5, name: 'Gà kho', price: 40000, category: 'Món chính' },
  ];
  OrderItems: OrderItem[] = [
    { idd: 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000 },
    { idd: 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000 },
    { idd: 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000 },
    { idd: 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000 },
    { idd: 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000 },
    { idd: 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000 },
    { idd: 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000 },
    { idd: 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000 },
    { idd: 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000 },
    { idd: 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000 },
    { idd: 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000 },
    { idd: 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000 },
    { idd: 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000 },
    { idd: 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000 },
    { idd: 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 25000 },
    { idd: 2, order_id: 2, menu_item_id: 2, quantity: 1, price: 25000 },
    { idd: 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000 },
    { idd: 3, order_id: 3, menu_item_id: 3, quantity: 1, price: 25000 },
  ];

  totalOrderPrice: number = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.calculateTotalPrice();
    this.http.get('http://localhost:6900/table/details/' + this.id).subscribe((data: any) => {
      this.display_name = data.display_name;
    });
    this.name = this.display_name;
  }

  calculateTotalPrice(): void {
    this.totalOrderPrice = this.OrderItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  }

  deleteTable(): void {
    let a: HttpParams = new HttpParams().set('id', this.id);
    this.http.post('http://localhost:6900/table/delete', a).subscribe((response) => {
      this.router.navigate(['/']);
    });
  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
        let a: HttpParams = new HttpParams().set('name', this.name).set('id', this.id);
        this.http.post('http://localhost:6900/table/edit', a).subscribe((data: any) => {
          console.info("i tried");
          this.router.navigated = false;
          this.router.navigate([this.router.url]);
        });
			},
			(reason) => {
				this.closeResult = `Dismissed`;
			},
		);
	}
}
