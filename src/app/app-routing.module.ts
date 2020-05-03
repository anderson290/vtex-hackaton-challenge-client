import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';
import { ConferenceComponent } from './conference/conference.component';
import { HelpComponent } from './help/help.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent, data: { animation: 'isRight' } },
  { path: 'list', component: ListComponent, data: { animation: 'isLeft' } },
  { path: 'help', component: HelpComponent, data: { animation: 'isRight' } },
  { path: 'conference', component: ConferenceComponent, data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
