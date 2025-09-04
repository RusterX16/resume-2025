import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration', standalone: true, pure: true })
export class DurationPipe implements PipeTransform {
  transform(startIn: Date | string | number, endIn?: Date | string | number | null): string {
    const s = this.toDate(startIn);
    const e = endIn != null && endIn !== '' ? this.toDate(endIn) : new Date();
    if (!s || !e) return '';

    // normalise (évite DST)
    const S = new Date(s.getFullYear(), s.getMonth(), s.getDate(), 12);
    const E = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 12);
    if (E < S) return '';

    // Mois "entiers" + fraction de mois pour un arrondi propre
    const mFloor = this.monthDiffFloor(S, E);
    const anchor = this.addMonthsClamped(S, mFloor);
    const next   = this.addMonthsClamped(S, mFloor + 1);
    const frac   = Math.min(1, Math.max(0, (+E - +anchor) / (+next - +anchor))); // 0..1
    const monthsExact = mFloor + frac;

    // ≥ 1 an : arrondi à l'année la plus proche (11.x mois => 1 an)
    const yearsRounded = Math.round(monthsExact / 12);
    if (yearsRounded >= 1) return `${yearsRounded} an${yearsRounded > 1 ? 's' : ''}`;

    // ≥ 1 mois : arrondi au mois le plus proche
    if (monthsExact >= 1) {
      const monthsRounded = Math.round(monthsExact);
      return `${monthsRounded} mois`;
    }

    // < 1 mois : arrondi à la semaine, sinon jour
    const daysExact = (+E - +S) / 86400000;
    if (daysExact >= 7) {
      const weeksRounded = Math.round(daysExact / 7);
      return `${weeksRounded} semaine${weeksRounded > 1 ? 's' : ''}`;
    }

    const daysRounded = Math.round(daysExact);
    if (daysRounded >= 1) return `${daysRounded} jour${daysRounded > 1 ? 's' : ''}`;
    return 'moins d’un jour';
  }

  private monthDiffFloor(s: Date, e: Date): number {
    let m = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
    if (this.addMonthsClamped(s, m) > e) m--;
    return Math.max(0, m);
  }
  private addMonthsClamped(d: Date, months: number): Date {
    const y = d.getFullYear();
    const m = d.getMonth() + months;
    const last = new Date(y, m + 1, 0).getDate();
    const day = Math.min(d.getDate(), last);
    return new Date(y, m, day, 12);
  }
  private toDate(v: Date | string | number): Date | null {
    const d = v instanceof Date ? v : new Date(v);
    return isNaN(+d) ? null : d;
  }
}
