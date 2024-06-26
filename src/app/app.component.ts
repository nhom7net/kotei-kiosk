import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainLayoutComponent, TableDetailComponent, MenuEditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotei-kiosk';
}
