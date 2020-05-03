import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent, data: { animation: 'isRight' } },
  { path: 'list', component: ListComponent, data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
