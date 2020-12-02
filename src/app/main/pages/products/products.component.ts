import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
import { ProductsService } from './products.service';
import { ProductService } from '../../service/product.service';
import { FilterUtils } from 'primeng/utils';

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  actualUser: string;
  selectedProduct: ProductModel;

  cols: any[];
  yearTimeout: any;

  constructor(
    private productService: ProductService,
    private router: Router) { }

  dadosParaPreencherTabela;

  colunasTabela = [
    { hintName: 'id', field: 'id', header: 'ID', showCol: true },
    { hintName: 'Nome', field: 'nome', header: 'NOME', showCol: true },
    { hintName: 'Idade', field: 'idade', header: 'IDADE', showCol: true },
  ];

  colunasSelecionadas = this.colunasTabela;

  ngOnInit(): void {
    console.log(this.productService.buscarProducts());
    console.log('teste');
    this.cols = [
      { field: 'id', header: 'Código ERP' },
      { field: 'nome', header: 'Apresentação' },
      { field: 'idade', header: 'Nome Comercial' },
    ];

  }

  FilterUtils: any['custom'] = (value, filter): boolean => {
    if (filter === undefined || filter === null || filter.trim() === '') {
      return true;
    }

    if (value === undefined || value === null) {
      return false;
    }

    return parseInt(filter) > value;
  };



  preencherTabela() {
    this.productService.buscarProducts().then((res) => {
      this.dadosParaPreencherTabela = res.data.content;
    }).catch((err) => {
      alert('deu erro');
    });
  }

  downloadTableToPDF() {
    // new instance of jspdf
    const doc = new jsPDF('portrait', 'px', 'a4') as jsPDFWithPlugin;

    //cria a tabela
    doc.autoTable({
      head: [['Nome', 'Email', 'Cidade']],
      body: [
        ['Fernando', 'fernandojr109@.com', 'Aliança'],
        ['Cibelly', 'cibelly@gmail.com', 'São Lourenço'],
        ['Fernando', 'fernandojr18@hotmail.com', 'Recife']
      ]
    });
    // save the pdf
    doc.save('table.pdf');
  }

  // convertendo uma página html para pdf
  downloadHtmlToPdf() {
    const element = document.getElementById('table'); // escolhe pelo o id o componente que deseja renderizar no pdf
    html2canvas(element).then((canvas) => {
      console.log(canvas);

      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      const imgHeigth = canvas.height * 208 / canvas.width;
      doc.addImage(imgData, 0, 0, 208, imgHeigth);
      doc.save('image.pdf');
    });
  }
}
