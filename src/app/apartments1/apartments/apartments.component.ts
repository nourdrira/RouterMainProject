import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments = [
    { apartNum: 101, floorNum: 1, surface: 60, terrace: true, surfaceterrace: 20, category: 'Studio', ResidenceId: 1 },
    { apartNum: 102, floorNum: 1, surface: 80, terrace: false, surfaceterrace: 0, category: 'T2', ResidenceId: 1 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
