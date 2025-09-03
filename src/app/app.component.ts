import { Component } from '@angular/core';
import { ExperienceListComponent } from "./experience-list/experience-list.component";
import { EducationListComponent } from './education-list/education-list.component';

@Component({
  selector: 'app-root',
  imports: [
    ExperienceListComponent,
    EducationListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume-2025';
}
