import { Routes } from '@angular/router';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { TableViewComponent } from './table-view/table-view.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';

export const routes: Routes = [
    { path: '', component: TableViewComponent },
    { path: 'table/details', component: TableDetailComponent },
    { path: 'menu', component: MenuEditComponent }
];
