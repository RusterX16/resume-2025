export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  contractType?: 'CDI'|'CDD'|'Alternance'|'Stage'|'Freelance';
  start: Date | string;
  end?: Date | string | null;
  description?: string;
  stack?: string[];
  featured?: boolean;
}
