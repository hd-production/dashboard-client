import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuardService] },
  { path: 'example', loadChildren: './example/example.module#ExampleModule' },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
