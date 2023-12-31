import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './sectionOne/section/section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeOneComponent } from './sectionOne/welcome-one/welcome-one.component';
import { TourComponent } from './sectionOne/tour/tour.component';
import { LoginComponent } from './sectionOne/login/login.component';
import { PoliciesComponent } from './sectionOne/policies/policies.component';
import { AlmaComponent } from './sectionOne/alma/alma.component';
import { ClosingComponent } from './sectionOne/closing/closing.component';
import { SiteSearchComponent } from './sectionOne/site-search/site-search.component';
import { WelcomeTwoComponent } from './sectionTwo/welcome-two/welcome-two.component';
import { SectionTwoComponent } from './sectionTwo/section-two/section-two.component';
import { DirectionalQsComponent } from './sectionTwo/directional-qs/directional-qs.component';
import { IllComponent } from './sectionTwo/ill/ill.component';
import { StudyRoomsComponent } from './sectionTwo/study-rooms/study-rooms.component';
import { LocComponent } from './sectionTwo/loc/loc.component';
import { SectionThreeComponent } from './sectionThree/section-three/section-three.component';
import { WelcomeThreeComponent } from './sectionThree/welcome-three/welcome-three.component';
import { MasonMoneyComponent } from './sectionThree/mason-money/mason-money.component';
import { PrintingComponent } from './sectionThree/printing/printing.component';
import { PhoneComponent } from './sectionThree/phone/phone.component';
import { AccountComponent } from './sectionThree/account/account.component';
import { SectionFourComponent } from './sectionFour/section-four/section-four.component';
import { WelcomeFourComponent } from './sectionFour/welcome-four/welcome-four.component';
import { CustomerServiceComponent } from './sectionFour/customer-service/customer-service.component';
import { ReferenceComponent } from './sectionFour/reference/reference.component';
import { StacksComponent } from './sectionFour/stacks/stacks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SectionComponent,
    SidebarComponent,
    WelcomeOneComponent,
    TourComponent,
    LoginComponent,
    PoliciesComponent,
    AlmaComponent,
    ClosingComponent,
    SiteSearchComponent,
    WelcomeTwoComponent,
    SectionTwoComponent,
    DirectionalQsComponent,
    IllComponent,
    StudyRoomsComponent,
    LocComponent,
    SectionThreeComponent,
    WelcomeThreeComponent,
    MasonMoneyComponent,
    PrintingComponent,
    PhoneComponent,
    AccountComponent,
    SectionFourComponent,
    WelcomeFourComponent,
    CustomerServiceComponent,
    ReferenceComponent,
    StacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
