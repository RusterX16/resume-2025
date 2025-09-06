import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {

  @Input() title!: string;
  @Input() icon?: string;
  @Input() subtitle?: string;
}
