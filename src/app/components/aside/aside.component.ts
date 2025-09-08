import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

type Kind = 'lang' | 'fw' | 'tool';
type TechItem = { label: string; kind: Kind };
type TechGroup = { category: string; items: TechItem[] };
type Area = 'Front-end' | 'Back-end' | 'Outils';
type AreaGroup = { area: Area; items: TechItem[] };

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [NgClass],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  // ——— Infos perso
  infos = [
    { icon: '📍', text: 'Paris, France' },
    { icon: '✉️', text: 'eliottbarbetpro@gmail.com', href: 'mailto:eliottbarbetpro@gmail.com' },
    { icon: '📞', text: '+33 6 37 47 48 66', href: 'tel:+33637474866' },
    { icon: '🎂', text: '24 ans' },
    { icon: '🚗', text: 'Permis B' },
  ];

  // ——— Langues naturelles (liste simple)
  languages = [
    { name: 'Français', note: 'Natif' },
    { name: 'Anglais',  note: 'TOEIC 840/990' },
    { name: 'Allemand', note: 'Notions' },
    { name: 'Espagnol', note: 'Notions' },
  ];

  // ——— Logiciels / centres d’intérêt / soft skills
  tools: string[] = ['Suite Adobe', 'Suite Office', 'Suite JetBrains', 'VS Code', 'Figma', 'Vegas Pro', 'Cinema 4D', 'Audacity', 'Notion'];
  interests: string[] = ['Photographie', 'Montage vidéo', 'Voix off', 'Tennis', 'Muay Thaï', 'Jeux vidéo', 'Claviers custom'];

  // ——— Compétences techniques (source)
  tech: TechGroup[] = [
    // OOP supprimé → Back-end direct (avec Python dedans)
    { category: 'Front-end', items: [
      { label: 'HTML',       kind: 'lang' },
      { label: 'CSS',        kind: 'lang' },
      { label: 'JavaScript', kind: 'lang' },
      { label: 'TypeScript', kind: 'lang' },
      { label: 'Angular',    kind: 'fw' },
      { label: 'Vue',        kind: 'fw' },
      { label: 'RxJS',       kind: 'fw' },
      { label: 'NgRx',       kind: 'fw' },
      { label: 'Jest',       kind: 'tool' },
      { label: 'Cypress',    kind: 'tool' },
    ]},
    { category: 'Back-end', items: [
      { label: 'Java',   kind: 'lang' },
      { label: 'C#',     kind: 'lang' },
      { label: 'Python', kind: 'lang' },
      { label: 'Node.js', kind: 'fw' },
      { label: 'Spring',   kind: 'fw' },
      { label: 'Jakarta EE', kind: 'fw' },
      { label: 'JUnit',     kind: 'tool' },
    ]},
    { category: 'Outillage', items: [
      { label: 'SQL',    kind: 'lang' },
      { label: 'SonarLint', kind: 'tool' },
      { label: 'Maven', kind: 'tool' },
      { label: 'Docker', kind: 'tool' },
      { label: 'Git',   kind: 'tool' },
      { label: 'Linux', kind: 'tool' },
    ]},
  ];

  linkedInQRCodeURL = 'assets/images/linkedin.png';
  githubQRCodeURL = 'assets/images/github.png';

  /** Regroupe en Front-end / Back-end / Outils */
  get groupedTech(): AreaGroup[] {
    const areaMap: Record<string, Area> = {
      'Front-end':   'Front-end',
      'Back-end':    'Back-end',
      // compat au cas où d’anciens noms traînent encore :
      'OOP':               'Back-end',
      'Machine Learning':  'Back-end',
      'Outillage':   'Outils',
    };

    const buckets: Record<Area, TechItem[]> = {
      'Front-end': [],
      'Back-end':  [],
      'Outils':    [],
    };

    for (const g of this.tech) {
      const area = areaMap[g.category] ?? 'Outils';
      buckets[area].push(...g.items);
    }

    const dedupe = (arr: TechItem[]) =>
      Array.from(new Map(arr.map(i => [i.label, i])).values());

    return [
      { area: 'Front-end', items: dedupe(buckets['Front-end']) },
      { area: 'Back-end',  items: dedupe(buckets['Back-end']) },
      { area: 'Outils',    items: dedupe(buckets['Outils']) },
    ];
  }
}
