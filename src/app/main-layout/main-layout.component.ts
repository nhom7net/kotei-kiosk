import { Component, Input} from '@angular/core';
import { TableDetailComponent } from '../table-detail/table-detail.component';
interface Table {
  id: number;
  display_number: string;
  status: 'empty' | 'occupied' | 'reserved';
  items?: number;
  total?: number;
}
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TableDetailComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  @Input() inputData: any;
  tables: Table[] = [
    { id: 1, display_number: 'Bàn 01', status: 'occupied', items: 5, total: 129000 },
    { id: 2, display_number: 'Bàn 02', status: 'empty' },
    { id: 3, display_number: 'Bàn 03', status: 'occupied', items: 1, total: 47500 },
    { id: 4, display_number: 'Bàn 04', status: 'empty' },
    { id: 5, display_number: 'Bàn 05', status: 'occupied', items: 10, total: 397000 }
  ];
  addTable() {
    const newTableId = this.tables.length + 1;
    const newTable: Table = {
      id: newTableId,
      display_number: `Bàn ${newTableId}`,
      status: 'empty'
    };
    this.tables.push(newTable);
  }
}
