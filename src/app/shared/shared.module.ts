import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PopWhatsappComponent } from './pop-whatsapp/pop-whatsapp.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopWhatsappComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopWhatsappComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
