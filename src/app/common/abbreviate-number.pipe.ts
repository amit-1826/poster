import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'abbreviateNumber',
    standalone: true
})
export class AbbreviateNumberPipe implements PipeTransform {
    transform(value: number | string | null | undefined, digits = 1): string {
        if (value === null || value === undefined) return '';
        const n = typeof value === 'number' ? value : Number(value);
        if (isNaN(n)) return '';

        const sign = n < 0 ? '-' : '';
        let num = Math.abs(n);
        if (num < 1000) return sign + num.toString();

        const units = ['K', 'M', 'B', 'T'];
        let idx = Math.floor(Math.log10(num) / 3);
        if (idx > units.length) idx = units.length;

        const scaled = num / Math.pow(1000, idx);
        const formatted = scaled < 10 ? scaled.toFixed(digits).replace(/\.0+$/, '') : Math.round(scaled).toString();
        const unit = units[idx - 1] || '';

        return `${sign}${formatted}${unit}`;
    }
}
