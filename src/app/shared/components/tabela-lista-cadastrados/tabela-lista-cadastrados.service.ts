import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/core/token/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class TabelaListaCadastradosService {

  constructor(private http: HttpClient,
    public tokenService: TokenService) { }

    private httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.tokenService.getToken()
      })
    };

    buscarProducts() {
      return this.http.get(
        API_URL + '/produtos', this.httpOptions
      ).pipe(
        map((result: any) => result.data),
        take(1)
      ).toPromise();
    }

}
