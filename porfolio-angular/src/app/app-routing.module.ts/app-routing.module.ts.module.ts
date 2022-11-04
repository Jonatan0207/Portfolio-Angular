import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from '../intro/intro.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {path: 'intro', component:IntroComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleTsModule { }
