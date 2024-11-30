import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './Residences1/residences/residences.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ResidenceDetailsComponent } from './Residences1/residence-details/residence-details.component';
import { FooterComponent } from './footer/footer.component';
import { ApartmentsComponent } from './apartments1/apartments/apartments.component';
import { AddResidenceComponent } from './Residences1/add-residence/add-residence.component';
import { ApartmentsByResidenceComponent } from './apartments1/apartments-by-residence/apartments-by-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ResidencesComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ResidenceDetailsComponent,
    FooterComponent,
    ApartmentsComponent,
    AddResidenceComponent,
    ApartmentsByResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
