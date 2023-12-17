import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeOneComponent } from './sectionOne/welcome-one/welcome-one.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome_one', component: WelcomeOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
