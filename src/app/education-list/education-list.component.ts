import { Component } from '@angular/core';
import { EducationItem } from '../models/education.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-education-list',
  imports: [CardComponent],
  templateUrl: './education-list.component.html',
  styleUrl: './education-list.component.scss'
})
export class EducationListComponent {

  mode: 'detailed' | 'compact' = 'detailed';
  educations: EducationItem[] = [
    {
      degree: "Ecole d'Ingénieurs Informatique",
      school: "ESIEA",
      location: "Paris, France",
      level: "Bac+5",
      start: new Date(2022, 9, 5),
      end: new Date(2025, 8, 30),
      description: "Majeur Software Engineering",
      subjects: ["FullStack", "Architecture", "UI/UX", "DevOps", "Auto-Entrepreunariat"],
      featured: true
    },
    {
      degree: "DUT Informatique",
      school: "IUT de Montpellier-Sète",
      location: "Montpellier, France",
      level: "Bac+2",
      start: new Date(2021, 9, 13),
      end: new Date(2022, 8, 19),
      subjects: ["Programmation", "Base de données", "Réseau", "Système"],
      featured: false
    },
    {
      degree: "DUT Génie Electrique Informatique Industrielle",
      school: "IUT de Nantes-Carquefou",
      location: "Carquefou, France",
      level: "Bac+2",
      start: new Date(2019, 9, 2),
      end: new Date(2021, 6, 18),
      description: "Spe. Systèmes Informatiques & Numériques",
      subjects: ["Physique", "Electronique", "Energie", "Logique"],
      featured: false
    }
  ];

  get list(): EducationItem[] {
    return this.mode === 'compact'
      ? this.educations.filter(e => e.featured)
      : this.educations;
  }
}
