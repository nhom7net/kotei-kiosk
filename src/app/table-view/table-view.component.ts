import { Component, Input, OnInit, TemplateRef, inject } from '@angular/core';
import { TableDetailComponent } from '../table-detail/table-detail.component';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface Table {
  id: number;
  display_name: string;
  status: string;
}
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TableDetailComponent],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css',
})
export class TableViewComponent implements OnInit {
  @Input() inputData: any;
  private modalService = inject(NgbModal);
	closeResult = '';

  tables: Table[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:6900/table').subscribe((data: any) => {
      this.tables = data;
    });
  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed`;
			},
		);
	}

}
