import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TabelaListaCadastradosService } from './tabela-lista-cadastrados.service';
import { ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-tabela-lista-cadastrados',
  templateUrl: './tabela-lista-cadastrados.component.html',
  styleUrls: ['./tabela-lista-cadastrados.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabelaListaCadastradosComponent implements OnInit {

  buscarPorCampo = false;
  buscarPorCampoExpanded = false;
  loading = true;

  auxActive: boolean;
  auxError: boolean;
  auxMessage: string;

  confirmarDel = false;
  confirmarDelRT = false;
  selecionarColunas = false;
  colunasSelecionadas;
  colunasSubtabelas;
  totalRecords;
  numeroDeDadosPorPagina = 20;
  isLazyTable = false;

  dadosParaPreencherTabela;

  @ViewChild('tabelaCadastros') tabelaCadastros: Table;

  @Input() cols;
  @Input() telaReferenteDaTabela;
  @Input() placeholderBuscar;
  @Input() rotaBtnCadastrar;


  constructor(private tabelaListaCadastradosService: TabelaListaCadastradosService) {
  }

  ngOnInit() {
    this.loading = true;
    if (this.telaReferenteDaTabela === 'Products') {
      this.tabelaListaCadastradosService.buscarProducts().then(products => {
        this.dadosParaPreencherTabela = products;
        this.loading = false;
      }).catch((err) => {
        this.loading = false;
        this.auxActive = true;
        this.auxMessage = err.message || 'Aconteceu um erro';
        this.auxError = true;
      });
    }
    this.colunasSelecionadas = this.cols;

  }

  segurarValor: any;
  showModalSelecionarColunas = () => this.selecionarColunas = true;
  showModalSelecionarColunasExpanded = () => console.log('showModalSelecionarColunasExpanded');
  funcaoDoOnHide = () => this.auxActive = false;

  salvarColunas() {
    let updateCols = [];
    this.cols.forEach(function (value) {
      if (value.showCol) {
        updateCols.push(value);
      }
    });
    this.colunasSelecionadas = updateCols;
    this.selecionarColunas = false;
  }

  marcarTodasColunas() {
    this.cols.forEach(function (value) {
      if (value.showCol == false) {
        value.showCol = true;
      }
    });
  }

}



