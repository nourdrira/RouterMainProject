import { Component } from '@angular/core';
import { Residence } from '../../core/models/Residence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {

  search_item: string = "";
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];
  favoris: Residence[] = [];

  constructor(private router: Router) {}

  // Affiche l'adresse de la résidence
  showLocation(adress: string) {
    if (adress === 'inconnu') {
      alert("l'adresse est inconnue");
    } else {
      alert("L'adresse est " + adress);
    }
  }

  // Ajouter la résidence aux favoris
  addFavorite(residence: Residence) {
    if (!this.favoris.includes(residence)) {
      this.favoris.push(residence);
    }
    console.log(this.favoris);
  }

  // Filtrer les résidences par adresse
  filtreByAddress() {
    return this.listResidences.filter(residance =>
      residance.address.toLowerCase().includes(this.search_item.toLowerCase())
    );
  }

  // Naviguer vers le détail d'une résidence
  goToResidenceDetails(id: number) {
    this.router.navigate(['/residences', id]);
  }
}
