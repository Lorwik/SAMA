import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CallMeComponent } from './call-me/call-me.component';
import { HelpComponent } from './help/help.component';
import { ContractComponent } from './contract/contract.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    CallMeComponent,
    HelpComponent,
    ContractComponent,
    ErrorPagesComponent
  ],
  exports: [
    HomeComponent,
    CallMeComponent,
    HelpComponent,
    ContractComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]

})
export class PagesModule { }
