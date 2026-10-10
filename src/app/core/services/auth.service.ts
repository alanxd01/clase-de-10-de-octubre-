import { Injectable, computed, signal } from '@angular/core';
import { User } from '../models/user.model';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly user = signal<User | null>(null);

  readonly isLoggedIn = computed(() => this.user() !== null);

  readonly firstName = computed(() => this.user()?.name.split(' ')[0] ?? '');

  login(email: string, password: string): boolean {
    const cleanEmail = email.trim();

    if (!EMAIL_PATTERN.test(cleanEmail) || password.length < MIN_PASSWORD_LENGTH) {
      return false;
    }

    const localPart = cleanEmail.split('@')[0];
    const name = localPart
      .split(/[._-]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    this.user.set({ name: name || 'Amigo', email: cleanEmail });
    return true;
  }

  logout(): void {
    this.user.set(null);
  }
}
