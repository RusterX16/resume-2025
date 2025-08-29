import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../models/experience.model';

@Component({
  selector: 'app-experience-card',
  imports: [DatePipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {

  @Input() exp!: ExperienceItem;
  @Input() mode!: 'compact' | 'detailed';
}
