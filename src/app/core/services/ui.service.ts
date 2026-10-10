import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  id: number;
  text: string;
}

const TOAST_DURATION_MS = 2800;

@Injectable({ providedIn: 'root' })
export class UiService {
  readonly cartOpen = signal(false);
  readonly loginOpen = signal(false);
  readonly toast = signal<ToastMessage | null>(null);

  private toastCounter = 0;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  openCart(): void {
    this.cartOpen.set(true);
  }

  closeCart(): void {
    this.cartOpen.set(false);
  }

  openLogin(): void {
    this.loginOpen.set(true);
  }

  closeLogin(): void {
    this.loginOpen.set(false);
  }

  showToast(text: string): void {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }

    this.toastCounter += 1;
    this.toast.set({ id: this.toastCounter, text });

    this.toastTimer = setTimeout(() => this.toast.set(null), TOAST_DURATION_MS);
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
