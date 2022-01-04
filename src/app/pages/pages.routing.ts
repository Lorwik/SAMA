import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContractComponent } from './contract/contract.component';
import { CallMeComponent } from './call-me/call-me.component';
import { HelpComponent } from './help/help.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { ConocenosComponent } from './conocenos/conocenos.component';

const routes: Routes = [

    { 
        path: '', 
        children: [
          { path: 'home', component:HomeComponent },
          { path: 'contract', component: ContractComponent },
          { path: 'call-me', component: CallMeComponent },
          { path: 'help', component: HelpComponent },
          { path: 'aviso-legal', component: AvisoLegalComponent },
          { path: 'cookies', component: CookiesComponent },
          { path: 'privacidad', component: PrivacidadComponent },
          { path: 'conocenos', component: ConocenosComponent },
        ]
      },
      
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
