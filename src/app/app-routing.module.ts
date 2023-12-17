import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeOneComponent } from './sectionOne/welcome-one/welcome-one.component';
import { TourComponent } from './sectionOne/tour/tour.component';
import { LoginComponent } from './sectionOne/login/login.component';
import { PoliciesComponent } from './sectionOne/policies/policies.component';
import { AlmaComponent } from './sectionOne/alma/alma.component';
import { ClosingComponent } from './sectionOne/closing/closing.component';
import { SiteSearchComponent } from './sectionOne/site-search/site-search.component';
import { WelcomeTwoComponent } from './sectionTwo/welcome-two/welcome-two.component';
import { DirectionalQsComponent } from './sectionTwo/directional-qs/directional-qs.component';
import { IllComponent } from './sectionTwo/ill/ill.component';
import { StudyRoomsComponent } from './sectionTwo/study-rooms/study-rooms.component';
import { LocComponent } from './sectionTwo/loc/loc.component';
import { WelcomeThreeComponent } from './sectionThree/welcome-three/welcome-three.component';
import { MasonMoneyComponent } from './sectionThree/mason-money/mason-money.component';
import { PrintingComponent } from './sectionThree/printing/printing.component';
import { PhoneComponent } from './sectionThree/phone/phone.component';
import { AccountComponent } from './sectionThree/account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome_one', component: WelcomeOneComponent},
  { path: 'tour', component: TourComponent},
  { path: 'login', component: LoginComponent},
  { path: 'policies', component: PoliciesComponent},
  { path: 'alma', component: AlmaComponent},
  { path: 'close', component: ClosingComponent},
  { path: 'site-search', component: SiteSearchComponent},
  { path: 'section-two', component: WelcomeTwoComponent},
  { path: 'directional-qs', component: DirectionalQsComponent},
  { path: 'ill', component: IllComponent},
  { path: 'study-rooms', component: StudyRoomsComponent},
  { path: 'shelving', component: LocComponent},
  { path: 'section-three', component: WelcomeThreeComponent},
  { path: 'mason-money', component: MasonMoneyComponent},
  { path: 'printer', component: PrintingComponent},
  { path: 'phone', component: PhoneComponent},
  { path: 'accounts', component: AccountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
