import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { EditThemeComponent } from './edit-theme/edit-theme.component';
import { MyListingsComponent } from './my-listings/my-listings.component';

const routes: Routes = [
  {
    path: 'listings',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':themeId',
        component: CurrentThemeComponent,
      },
    ],
  },
  {
    path: 'add-listing',
    component: NewThemeComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'edit-listing/:themeId',
    component: EditThemeComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'my-listings',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MyListingsComponent,
        canActivate: [AuthActivate],
      },
      {
        path: ':themeId',
        component: CurrentThemeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
