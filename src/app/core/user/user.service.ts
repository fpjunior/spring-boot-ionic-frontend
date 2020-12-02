import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/core/token/token.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    public tokenService: TokenService,
    public userService: UserService) { }

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.tokenService.getToken()
    })
  };

}
