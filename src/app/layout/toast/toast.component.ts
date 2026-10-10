import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { UiService } from '../../core/services/ui.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-toast',
  imports: [IconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  private readonly ui = inject(UiService);

  readonly messages = computed(() => {
    const toast = this.ui.toast();
    return toast ? [toast] : [];
  });
}
