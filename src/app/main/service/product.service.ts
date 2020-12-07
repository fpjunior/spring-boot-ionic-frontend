import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/crud.service';
import { ProductModel } from '../../shared/models/product.model';

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudService<ProductModel> {
  constructor(public http: HttpClient,
              ) {
    super(http, API_URL);
  }

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  buscarUsuarios() {
    return this.http.get(API_URL + '/usuarios', this.httpOptions)
      .toPromise()
      .then((res) => res)
      .catch((error: any) => error);
  }



}
