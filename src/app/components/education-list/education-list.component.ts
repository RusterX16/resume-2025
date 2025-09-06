import { Component } from '@angular/core';
import { EducationItem } from '../../models/education.model';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionTitleComponent } from "../section-title/section-title.component";

@Component({
  selector: 'app-education-list',
  imports: [
    CardComponent,
    SectionTitleComponent
  ],
  templateUrl: './education-list.component.html',
  styleUrl: './education-list.component.scss'
})
export class EducationListComponent {

  mode: 'detailed' | 'compact' = 'compact';
  educations: EducationItem[] = [
    {
      degree: "Ecole d'Ingénieurs Informatique",
      school: "ESIEA",
      location: "Paris, France",
      level: "Bac+5",
      start: new Date(2022, 8, 5),
      end: new Date(2025, 7, 30),
      description: "Majeur Software Engineering",
      subjects: ["FullStack", "Architecture", "UI/UX", "DevOps", "Auto-Entrepreunariat"],
      featured: true
    },
    {
      degree: "DUT Informatique",
      school: "IUT de Montpellier-Sète",
      location: "Montpellier, France",
      level: "Bac+2",
      start: new Date(2021, 8, 13),
      end: new Date(2022, 7, 19),
      description: "Année spéciale (DUT en 1 an)",
      subjects: ["Programmation", "Base de données", "Réseau", "Système"],
      featured: true
    },
    {
      degree: "DUT Génie Electrique Informatique Industrielle",
      school: "IUT de Nantes-Carquefou",
      location: "Carquefou, France",
      level: "Bac+2",
      start: new Date(2019, 8, 2),
      end: new Date(2021, 5, 18),
      description: "Spe. Systèmes Informatiques & Numériques",
      subjects: ["Physique", "Electronique", "Energie", "Logique"],
      featured: true
    },
    {
      degree: "Baccalauréat Technologique - Science & Technologie de l'Industrie et du Développement Durable",
      school: "Lycée Saint Aubin La Salle",
      location: "Angers, France",
      level: "Bac",
      start: new Date(2017, 7, 4),
      end: new Date(2019, 5, 1), // Mauvais jour
      description: "Spe. Systèmes d'Information et Numérique",
      subjects: ["Mathématiques", "Physique", "Electronique", "Informatique"],
      featured: true
    }
  ];

  get list(): EducationItem[] {
    return this.mode === 'compact'
      ? this.educations.filter(e => e.featured)
      : this.educations;
  }
}
