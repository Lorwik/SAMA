import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPagesComponent } from './pages/error-pages/error-pages.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: ErrorPagesComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
