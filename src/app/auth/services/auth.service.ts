import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CredentialsLoginModel } from '../../shared/models/credentials-login.model';
import { ResponseAuthModel } from '../../shared/models/response-auth.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { KEY_CURRENT_USER } from '../../shared/keys-local-storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<ResponseAuthModel>;
  private logoutSubject: Subject<any>;

  constructor(private http: HttpClient, private router: Router) {
    const savedUser = JSON.parse(localStorage.getItem(KEY_CURRENT_USER));
    this.currentUserSubject = new BehaviorSubject<ResponseAuthModel>(savedUser);
    this.logoutSubject = new Subject<any>();
  }

  login(credentials: CredentialsLoginModel): Observable<ResponseAuthModel> {
    if (
      credentials.cpf === '11111111111' &&
      credentials.password === '123456'
    ) {
      return of({
        token: 'adsfgzdfhsdghwdfbsdgfhsdgfnbsdhnv',
        user: {
          name: 'Fernando Pedro',
        },
      }).pipe(
        tap((user: ResponseAuthModel) => {
          localStorage.setItem(KEY_CURRENT_USER, JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
    }
  }

  logout(): void {
    localStorage.removeItem(KEY_CURRENT_USER);
    this.currentUserSubject.next(null);
    this.logoutSubject.next(null);
    this.router.navigate(['/']);
  }

  get token(): string {
    const savedUser = JSON.parse(localStorage.getItem(KEY_CURRENT_USER));
    if (!savedUser) {
      return null;
    }
  }

  get currentUser(): ResponseAuthModel {
    return this.currentUserSubject.value;
  }

  get currentUser$(): Observable<ResponseAuthModel> {
    return this.currentUserSubject.asObservable();
  }

  get isUserLogged(): boolean {
    return this.currentUser != null;
  }

  get isUserLogged$(): Observable<boolean> {
    return this.currentUser$.pipe(
      map((user: ResponseAuthModel) => user != null)
    );
  }

  get logout$(): Observable<any> {
    return this.logoutSubject.asObservable();
  }
}
