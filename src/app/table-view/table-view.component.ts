import { Component, Input, OnInit, TemplateRef, inject } from '@angular/core';
import { TableDetailComponent } from '../table-detail/table-detail.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
interface Table {
  id: number;
  display_name: string;
  status: boolean;
}
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TableDetailComponent, FormsModule, RouterLink],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css',
})
export class TableViewComponent implements OnInit {
  @Input() name: any;
  private modalService = inject(NgbModal);
  private route = inject(ActivatedRoute);
	closeResult = '';

  tables: Table[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('http://localhost:6900/table').subscribe((data: any) => {
      this.tables = data;
    });
  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
        let a: HttpParams = new HttpParams().set('name', this.name);
        this.http.post('http://localhost:6900/table/create', a).subscribe((data: any) => {
          console.info("i tried");
          // not very angular-ish eh?
          window.location.reload();
        });
			},
			(reason) => {
				this.closeResult = `Dismissed`;
			},
		);
	}

}
