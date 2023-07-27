import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PopupComponent } from './popup/popup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VehicleCarCardComponent } from './vehicle-car-card/vehicle-car-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodolistComponent,
    PopupComponent,
    NavigationComponent,
    VehicleCarCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
