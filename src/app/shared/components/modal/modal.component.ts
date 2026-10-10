import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-modal',
  imports: [IconButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  readonly open = input(false);
  readonly title = input.required<string>();
  readonly closed = output<void>();

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.open()) {
      this.closed.emit();
    }
  }

  close(): void {
    this.closed.emit();
  }
}
