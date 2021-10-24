import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../views/categories/categories.component';
import { DevicesComponent } from '../views/devices/devices.component';
import { HomeComponent } from '../views/home/home.component';

const routes: Routes =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
