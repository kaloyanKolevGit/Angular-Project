import { Component } from '@angular/core';
import { Car } from '../types/carType';

@Component({
  selector: 'app-vehicle-car-card',
  templateUrl: './vehicle-car-card.component.html',
  styleUrls: ['./vehicle-car-card.component.css']
})
export class VehicleCarCardComponent {
  car1 = {model: 'BMW', year: 2023, transmission: 'Automatic', price: 100000, image: 'https://media.ed.edmunds-media.com/bmw/m8/2020/oem/2020_bmw_m8_coupe_competition_fq_oem_1_1600.jpg'}
  car2 = {model: 'Chevrolet Camaro', year: 2015, transmission: 'Manual', price: 70900, image: 'https://g1-bg.cars.bg/2023-02-12_2/63e8fbf55306f9aac4083f32o.jpg'}
  car3 = {model: 'Mercedes E Class AMG', year: 2018, transmission: 'Automatic', price: 85000, image: 'https://g1-bg.cars.bg/2022-12-24_2/63a6e4ec5d205c88e309de93o.jpg'}
  car4 = {model: 'Mercedes E Class 400', year: 2019, transmission: 'Automatic', price: 97000, image: 'https://g1-bg.cars.bg/2023-05-18_1/6465dbb7fc727dbe3602b912o.jpg'}
  carCardList: Car[] = [this.car1, this.car2, this.car3, this.car4, ]
}
