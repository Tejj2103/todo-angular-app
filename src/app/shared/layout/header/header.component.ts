import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated$; 
  constructor(private tokenSrv: TokenService, private authSrv: AuthService){
    this.isAuthenticated$ = this.tokenSrv.isAuthentication;
  }


  onLogout()
  {
    this.authSrv.onLogout();
  }
}
