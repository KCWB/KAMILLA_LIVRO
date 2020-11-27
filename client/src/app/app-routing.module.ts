import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLivrosComponent } from './views/livro/list-livros/list-livros.component';

const routes: Routes = [{
  path:'', component: ListLivrosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
