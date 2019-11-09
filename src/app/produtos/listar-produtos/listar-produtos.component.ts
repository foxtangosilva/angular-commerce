import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html'
})
export class ListarProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[]

  ngOnInit() {
    this.produtoService.obterProdutos()
    .subscribe(
      res => {
        this.produtos = res;
      },
      error => console.log("ERRO : " + error)
    )
  }
}