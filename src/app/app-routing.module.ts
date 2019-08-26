import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EventsComponent } from './events/events.component';
import { AptComponent } from './apt/apt.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'events', component: EventsComponent},
  { path: 'apt', component: AptComponent},
  { path: '',  redirectTo: 'portfolio',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
