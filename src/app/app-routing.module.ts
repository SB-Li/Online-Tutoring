import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

const routers = [
  {path: 'characters', component: TabsComponent,
   children: [
     {path: '', redirectTo: 'all', pathMatch: 'full' },
     {path: ':side', component: ListComponent }
  ]},
  {path: 'newChar', component: CreateCharacterComponent},
  {path: '**', component: TabsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }
