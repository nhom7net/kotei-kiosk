import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const routes: Routes = [
    {
        path:'table/:id', 
        component: TableDetailComponent,
    },
    {
        path: 'main-layout', component: MainLayoutComponent,
    }
];
