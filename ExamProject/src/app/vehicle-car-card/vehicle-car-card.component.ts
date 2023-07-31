import { Component } from '@angular/core';
import { Car } from '../types/carType';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-vehicle-car-card',
  templateUrl: './vehicle-car-card.component.html',
  styleUrls: ['./vehicle-car-card.component.css']
})
export class VehicleCarCardComponent {
  themesList: Theme[] = [];

  constructor(
    private apiService: ApiService,
  ) {}
  
  ngOnInit(): void {
    this.apiService.getRecentListings(4).subscribe({
      next: (themes) => {
        this.themesList = themes;
        this.themesList.forEach((themes) => {themes._id = `/listings/${themes._id}`})
      },
      error: (err) => {
        console.error(`Error: ${err}`);
      },
    });
  }

}
