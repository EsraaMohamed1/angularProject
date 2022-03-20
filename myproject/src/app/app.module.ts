import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { CustomersComponent } from './component/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './component/error/error.component';
import { ValidformComponent } from './component/validform/validform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from './component/buttons/buttons.component';
import { TotalpriceComponent } from './component/totalprice/totalprice.component';
import { TableproductComponent } from './component/tableproduct/tableproduct.component';

let routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
   {path:'validform',component:ValidformComponent},
  {path:'products',component:ProductsComponent},
   {path:'profile/:id',component:CustomersComponent},
  {path:'**',component:ErrorComponent}
 
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    CustomersComponent,
    ErrorComponent,
    ValidformComponent,
    ButtonsComponent,
    TotalpriceComponent,
    TableproductComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
