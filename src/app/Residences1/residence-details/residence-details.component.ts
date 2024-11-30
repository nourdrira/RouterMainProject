import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../../core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {

  residence!: Residence;

  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('idR'));
    this.residence = this.listResidences.find(res => res.id === id)!;
  }

  // Naviguer vers la résidence suivante
  goToNextResidence() {
    const nextId = (this.residence.id % this.listResidences.length) + 1;
    this.router.navigate(['/residences', nextId]);
  }

  // Redirection vers l'ajout ou mise à jour d'une résidence
  goToAddResidence() {
    this.router.navigate(['/add-residence']);
  }
}
