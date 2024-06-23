import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';

interface Table {
  id: number;
  description: string;
}

@Component({
  standalone: true,
  selector: 'app-table-list', 
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  tables: Table[] = [
    { id: 1, description: 'Bàn gần cửa sổ' },
    { id: 2, description: 'Bàn ở giữa phòng' },
    { id: 3, description: 'Bàn gần quầy thu ngân' },
    { id: 4, description: 'Bàn ngoài trời' }
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openAddDialog(): void {
    const modalRef = this.modalService.open(TableDialogComponent);
    modalRef.componentInstance.data = { isEdit: false };

    modalRef.result.then((result: Table) => {
      if (result) {
        const newId = Math.max(...this.tables.map(t => t.id)) + 1;
        this.tables.push({ id: newId, description: result.description });
      }
    });
  }

  openEditDialog(table: Table): void {
    const modalRef = this.modalService.open(TableDialogComponent);
    modalRef.componentInstance.data = { isEdit: true, table };

    modalRef.result.then((result: Table) => {
      if (result) {
        const index = this.tables.findIndex(t => t.id === table.id);
        this.tables[index] = result;
      }
    });
  }

  deleteTable(id: number): void {
    this.tables = this.tables.filter(table => table.id !== id);
  }

  viewDetails(table: Table): void {
    alert(`Chi tiết bàn: ${table.description}`);
  }
}
