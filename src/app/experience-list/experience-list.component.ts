import { Component } from '@angular/core';
import { ExperienceCardComponent } from "./experience-card/experience-card.component";
import { ExperienceItem } from '../models/experience.model';

@Component({
  selector: 'app-experience-list',
  imports: [ExperienceCardComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss'
})
export class ExperienceListComponent {

  mode: 'compact' | 'detailed' = 'compact';
  experiences: ExperienceItem[] = [
    {
      role: "Ingénieur d’études",
      company: "Spirica",
      location: "Paris, France",
      contractType: "Alternance",
      start: new Date(2024, 9, 2),
      end: new Date(2025, 8, 30),
      stack: ["Jakarta EE", "PrimeFaces", "Maven", "PostgreSQL", "Git"],
      description: "Conception et développement d'un module de gestion de questionnaires produits structurés.",
      featured: true
    },
    {
      role: "Développeur Fullstack",
      company: "Equativ",
      location: "Paris, France",
      contractType: "Alternance",
      start: new Date(2022, 9, 19),
      end: new Date(2024, 8, 30),
      stack: ["Angular", "NgRx", "C#", "SQL Server", "Git"],
      description: "Développement d'une application de gestion de campagnes publicitaires.",
      featured: true
    },
    {
      role: "Stagiaire Développeur Java",
      company: "Nameshield",
      location: "Angers, France",
      contractType: "Stage",
      start: new Date(2022, 6, 6),
      end: new Date(2022, 8, 19),
      stack: ["Java", "JUnit", "PostgreSQL", "Gradle", "Mercurial"],
      description: "Assistance technique et migration de frameworks sur une application de sécurisation de noms de domaine.",
      featured: true
    },
    {
      role: "Stagiaire Développeur WordPress",
      company: "Excelvente",
      location: "Nantes, France",
      contractType: "Stage",
      start: new Date(2021, 4, 12),
      end: new Date(2021, 6, 18),
      stack: ["WordPress"],
      description: "Conception et mise en ligne de sites vitrines sous WordPress (thèmes, plugins, intégration)."
    },
    {
      role: "Opérateur de production",
      company: "Formplast",
      location: "Beaucouzé, France",
      contractType: "CDD",
      start: new Date(2019, 7, 29),
      end: new Date(2019, 8, 16),
      stack: [],
      description: "Opérations sur ligne de fabrication, respect des procédures qualité, horaires de nuit."
    }
  ];

  get list(): ExperienceItem[] {
    return this.mode === 'compact'
      ? this.experiences.filter(e => e.featured)
      : this.experiences;
  }
}
