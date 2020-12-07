import { ProductModel } from 'src/app/shared/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TokenService } from 'src/app/core/token/token.service';
import { UserService } from 'src/app/core/user/user.service';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const API_URL = environment.ApiUrl;
const url = 'http://localhost:8080/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    public tokenService: TokenService,
    public userService: UserService) { }

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.tokenService.getToken()
    })
  };


  getCars(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


  buscarUsuarios() {
    return this.http.post(url, this.httpOptions)
    .toPromise()
    .then((res) => res)
    .catch((error: any) => error);
  }
}
