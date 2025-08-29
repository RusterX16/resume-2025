import { Component, Input } from '@angular/core';
import { EducationItem } from '../../models/education.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-education-card',
  imports: [DatePipe],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss'
})
export class EducationCardComponent {

  @Input() education!: EducationItem;
  @Input() mode: 'detailed' | 'compact' = 'compact';
}
