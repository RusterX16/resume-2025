export interface EducationItem {
  degree: string;
  school: string;
  location?: string;
  level?: string;
  start: Date | string;
  end?: Date | string | null;
  description?: string;
  subjects?: string[];
  featured?: boolean;
}
