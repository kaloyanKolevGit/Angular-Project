import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css']
})
export class EditThemeComponent implements OnInit {
  theme: Theme | undefined;
  
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.fetchTheme();
  }


  editListingSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const id = this.activatedRoute.snapshot.params['themeId'];
    const { carModel, transmission, year, price, imageUrl,description} = form.value;
    this.apiService.editListing(id ,carModel, transmission, year, price, imageUrl, description).subscribe(() => {
      this.router.navigate([`/listings/${id}`]);
    });
  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getTheme(id).subscribe((theme) => {
      this.theme = theme;
      console.log(theme);
    });
  }
}
