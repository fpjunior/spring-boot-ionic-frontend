/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TabelaListaCadastradosService } from './tabela-lista-cadastrados.service';

describe('Service: TabelaListaCadastrados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabelaListaCadastradosService]
    });
  });

  it('should ...', inject([TabelaListaCadastradosService], (service: TabelaListaCadastradosService) => {
    expect(service).toBeTruthy();
  }));
});
