import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { TableDialogComponent } from './table-dialog/table-dialog.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableDialogComponent,TableListComponent,FormsModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotei-kiosk';
}
