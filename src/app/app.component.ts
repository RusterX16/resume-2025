import { Component } from '@angular/core';
import { ExperienceListComponent } from "./components/experience-list/experience-list.component";
import { EducationListComponent } from './components/education-list/education-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';

@Component({
  selector: 'app-root',
  imports: [
    AsideComponent,
    HeaderComponent,
    ExperienceListComponent,
    EducationListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume-2025';
}
