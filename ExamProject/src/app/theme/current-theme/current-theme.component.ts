import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme: Theme | undefined;
  user: User | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  getUser() {
    this.userService.user$.subscribe((user) => this.user = user)
  }

  ngOnInit(): void {
    this.fetchTheme();
    this.getUser();
  }



  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getTheme(id).subscribe((theme) => {
      this.theme = theme;
      console.log(theme);
      
    });
  }
}
