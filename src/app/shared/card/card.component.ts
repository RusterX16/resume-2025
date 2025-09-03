import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'card',
  standalone: true,
  imports: [DatePipe],
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

  @Input() mode: 'detailed' | 'compact' = 'detailed';
}
