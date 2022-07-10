import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-input-output';

  listaProdutos: string[] = ['Teclado', 'Mouse', 'Monitor', 'Headset'];

  addProdutos(novoProduto: string) {
    this.listaProdutos.push(novoProduto);
  }
}
