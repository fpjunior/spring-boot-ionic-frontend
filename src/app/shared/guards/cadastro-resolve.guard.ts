import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { of, Observable } from 'rxjs';

import { ProductModel } from 'src/app/shared/models/product.model';
import { CadastroService } from '../../main/service/cadastro.service';

@Injectable({
  providedIn: 'root',
})
export class CadastroResolveGuard implements Resolve<ProductModel> {
  constructor(private cadastroService: CadastroService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductModel | Observable<ProductModel> | Promise<ProductModel> {
    throw new Error("Method not implemented.");
  }
}
