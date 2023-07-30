import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  get onLoginRoute(): boolean {
    return this.router.url === '/auth/login'
  }

  get onRegisterRoute(): boolean {
    return this.router.url === '/auth/register'
  }

  get onHomeRoute(): boolean {
    return this.router.url === '/home'
  }

  get onListingsRoute(): boolean {
    return this.router.url.split('/')[0] === 'listings'
  }

  get onProfileRoute(): boolean {
    return this.router.url === '/auth/profile'
  }

}