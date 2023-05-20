import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private route: Router,
    private api: ApiService,
    private auth: AuthService
  ) {}

  loggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  logOut() {
    this.api.deleteToken();
    this.route.navigate(['/']);
  }
}

