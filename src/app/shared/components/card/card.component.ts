import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DurationPipe } from '../../pipes/duration/duration.pipe';

@Component({
  selector: 'card',
  standalone: true,
  imports: [DatePipe, DurationPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!: string;
  @Input() badge?: string | null;

  @Input() meta!: string;
  @Input() description?: string | null;

  @Input() tags: string[] = [];

  @Input() start!: Date | string | number;
  @Input() end?: Date | string | number | null;
}
