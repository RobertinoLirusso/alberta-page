import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutAlbertaComponent } from './about-alberta/about-alberta.component';
import { CitiesComponent } from './cities/cities.component';
import { TopAttractionsComponent } from './top-attractions/top-attractions.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Alberta Province',
    children: [
      {path: '', redirectTo: 'about_alberta' ,pathMatch:'full', },
      {path: 'about_alberta', component: AboutAlbertaComponent},
      {path: 'main_cities', component: CitiesComponent},
      {path: 'top_attractions', component: TopAttractionsComponent},
      {path: 'sports', component: SportsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
