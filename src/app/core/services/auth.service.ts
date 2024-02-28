import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';
import { map } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenSrv: TokenService) { }

  onLogin(data: ILogin) {
    return this.http.post<ILoginResponse>(apiEndpoint.AuthEndpoint.login, data).pipe(
      map((response: any) => {
        if (response) {
          this.tokenSrv.setToken(response.token)
        }
        return response;
      })
    )
  }

  onLogout(data: ILogin) {
    return this.http.post(apiEndpoint.AuthEndpoint.logout, data).subscribe({
      next: (response) => this.tokenSrv.removeToken()
    })
  }
}
