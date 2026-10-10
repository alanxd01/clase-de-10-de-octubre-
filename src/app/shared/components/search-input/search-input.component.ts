import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-search-input',
  imports: [IconComponent],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  readonly value = input('');
  readonly placeholder = input('Buscar jawitas...');
  readonly valueChange = output<string>();
  readonly submitted = output<string>();

  handleInput(event: Event): void {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.emit(this.value());
  }
}
