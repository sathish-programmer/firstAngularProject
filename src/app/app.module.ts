import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureSliderComponent } from './feature-slider/feature-slider.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { BannerComponent } from './banner/banner.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BannerCarouselComponent } from './banner-carousel/banner-carousel.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { AuthenticationService } from './service/authentication/authentication.service';
import { StartupHeaderComponent } from './startup-header/startup-header.component';

const routes: Routes = [
  {path:'customer_register', component:RegisterUserComponent},
  {path:'login', component:LoginUserComponent},
  {path:'web', component:ShowBlogComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeatureSliderComponent,
    ProductGridComponent,
    BannerComponent,
    BestSellerComponent,
    BannerCarouselComponent,
    RegisterUserComponent,
    PageNotFoundComponent,
    LoginUserComponent,
    GetLocationComponent,
    ShowBlogComponent,
    StartupHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
