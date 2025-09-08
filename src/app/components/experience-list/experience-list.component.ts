import { Component } from '@angular/core';
import { ExperienceItem } from '../../models/experience.model';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionTitleComponent } from "../section-title/section-title.component";

@Component({
  selector: 'app-experience-list',
  imports: [
    CardComponent,
    SectionTitleComponent
  ],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss'
})
export class ExperienceListComponent {

  mode: 'compact' | 'detailed' = 'compact';
  experiences: ExperienceItem[] = [
    {
      role: "Ingénieur d'études",
      company: "Spirica",
      location: "Paris, France",
      contractType: "Alternance",
      start: new Date(2024, 8, 2),
      end: new Date(2025, 7, 30),
      stack: ["Jakarta EE", "PrimeFaces", "Maven", "PostgreSQL", "Git"],
      description: "Conception et développement d'un module de gestion de questionnaires produits structurés.",
      featured: true
    },
    {
      role: "Développeur Fullstack",
      company: "Equativ",
      location: "Paris, France",
      contractType: "Alternance",
      start: new Date(2022, 8, 19),
      end: new Date(2024, 7, 30),
      stack: ["Angular", "NgRx", "C#", "SQL Server", "Git"],
      description: "Développement d'une application de gestion de campagnes publicitaires en ligne.",
      featured: true
    },
    {
      role: "Stagiaire Développeur Java",
      company: "Nameshield",
      location: "Angers, France",
      contractType: "Stage",
      start: new Date(2022, 5, 6),
      end: new Date(2022, 7, 19),
      stack: ["Java", "JUnit", "PostgreSQL", "Gradle", "Mercurial"],
      description: "Assistance technique et migration de frameworks sur une application de sécurisation de noms de domaine.",
      featured: true
    },
    {
      role: "Stagiaire Développeur WordPress",
      company: "Excelvente",
      location: "Nantes, France",
      contractType: "Stage",
      start: new Date(2021, 3, 12),
      end: new Date(2021, 5, 18),
      stack: ["WordPress"],
      description: "Conception et mise en ligne de sites vitrines sous WordPress.",
      featured: true
    },
    {
      role: "Opérateur de production",
      company: "Formplast",
      location: "Beaucouzé, France",
      contractType: "CDD",
      start: new Date(2019, 6, 29),
      end: new Date(2019, 7, 16),
      stack: [],
      description: "Opérations sur ligne de fabrication industrielle en horaires de nuit.",
      featured: true
    }
  ];

  get list(): ExperienceItem[] {
    return this.mode === 'compact'
      ? this.experiences.filter(e => e.featured)
      : this.experiences;
  }
}
