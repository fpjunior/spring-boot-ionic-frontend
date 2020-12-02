import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, timeout, tap } from 'rxjs/operators';
import { CrudService } from '../../shared/crud.service';
import { API_POST_LOCAL_STORAGE } from '../../shared/mocks/api-post-local-storage';
import { ProductModel } from '../../shared/models/product.model';
import { UserService } from 'src/app/core/user/user.service';
import { TokenService } from 'src/app/core/token/token.service';
// import { API_URL } from '../../shared/url.api';

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

  // buscarTabelaInventario() {
  //   return this.http.get(API_URL + '/produtos', this.httpOptions
  //     .pipe(
  //       timeout(90000),
  //       tap((result: any) => {
  //         return result;
  //       }),
  //       take(1)
  //     ).toPromise());
  // }

  buscarProducts() {
    return this.http.get(API_URL + '/produtos', this.httpOptions)
      .toPromise()
      .then((res) => res)
      .catch((error: any) => error);
  }



}
