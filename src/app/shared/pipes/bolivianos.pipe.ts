import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bolivianos' })
export class BolivianosPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    return `Bs. ${(value ?? 0).toFixed(2)}`;
  }
}
