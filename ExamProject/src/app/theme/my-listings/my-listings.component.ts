import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit{
  themesList: Theme[] = [];
  isLoading: boolean = true;

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    const id = this.userService.user?._id || '';
    this.userService.getMyListings(id).subscribe({
      next: (themes) => {
        this.themesList = themes;
        console.log(this.themesList)
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }
}
