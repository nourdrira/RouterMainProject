import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './Residences1/residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ResidenceDetailsComponent } from './Residences1/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences1/add-residence/add-residence.component';
import { ApartmentsComponent } from './apartments1/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments1/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './apartments1/add-apartment/add-apartment.component';

const routes: Routes = [
  // Route par défaut redirigeant vers "home"
  { path: "", redirectTo: "home", pathMatch: "full" },
  
  // Route pour la page d'accueil
  { path: "home", component: HomeComponent },
  
  // Routes pour les produits
  { path: "products", component: ProductComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  
  // Routes pour les résidences
  { path: "residences", component: ResidencesComponent },
  { path: "residences/:idR", component: ResidenceDetailsComponent },
  
  // Routes pour ajouter ou modifier une résidence
  { path: "add-residence", component: AddResidenceComponent },
  { path: "update-residence/:idR", component: AddResidenceComponent },  // Réutilisation du composant pour mise à jour
  
  // Routes pour les appartements
  { path: "apartments", component: ApartmentsComponent },
  { path: "apartments/residence/:residenceId", component: ApartmentsByResidenceComponent },
  { path: "add-apartment", component: AddApartmentComponent },
  
  // Route pour gérer les erreurs (lien non trouvé)
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
