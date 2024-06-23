import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.css']
}) 
export class TableDialogComponent implements OnInit {
  @Input() data: any;
  table: any = {};

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.data.table) {
      this.table = { ...this.data.table };
    }
  }

  onCancel(): void {
    this.activeModal.dismiss('Cross click');
  }

  saveTable(): void {
    this.activeModal.close(this.table);
  }
}
