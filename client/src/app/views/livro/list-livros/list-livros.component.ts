import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-list-livros',
  templateUrl: './list-livros.component.html',
  styleUrls: ['./list-livros.component.css']
})
export class ListLivrosComponent implements OnInit {

  livros: Livro[] = [];

  xColumns: string[] = ['nome', 'isbn', 'preco', 'criadoEm'];

  constructor(private router:Router, private service: LivroService) { }

  ngOnInit(): void {
    this.service.list().subscribe(livros=>{
      this.livros= livros;
    })
  }

  navigateToCreateLivro() : void{
    this.router.navigate(['livros/create'])
  }

}
