import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContractComponent } from './contract/contract.component';
import { CallMeComponent } from './call-me/call-me.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [

    { 
        path: '', 
        children: [
          { path: 'home', component:HomeComponent },
          { path: 'contract', component: ContractComponent },
          { path: 'call-me', component: CallMeComponent },
          { path: 'help', component: HelpComponent },
        ]
      },
      
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
