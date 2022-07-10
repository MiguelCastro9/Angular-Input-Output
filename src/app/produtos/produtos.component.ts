import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  @Input() produtos: string[] = [];

  @Output() novoProdutoEvent = new EventEmitter<string>();

  constructor() { }

  addNovoProduto(nome: string) {
    this.novoProdutoEvent.emit(nome);

  }

  ngOnInit(): void {

  }

}
