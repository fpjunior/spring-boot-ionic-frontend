import { CadastroModel } from './../../../shared/models/cadastro.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, private router: Router

  ) { }

  ngOnInit(): void {
  }

  update(cadastro: CadastroModel): void {
    this.router.navigate(['cadastro/new-cadastro', cadastro.id]);
  }

  save(): void {
  }

  cancel(): void {
  }
}
