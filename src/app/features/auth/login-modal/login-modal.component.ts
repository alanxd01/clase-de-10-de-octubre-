import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { UiService } from '../../../core/services/ui.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { FormFieldComponent } from '../../../shared/components/form-field/form-field.component';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-login-modal',
  imports: [ReactiveFormsModule, ModalComponent, FormFieldComponent, ButtonComponent, LogoComponent],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginModalComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly ui = inject(UiService);
  private readonly auth = inject(AuthService);

  readonly isOpen = this.ui.loginOpen;
  readonly attempted = signal(false);
  readonly loginFailed = signal(false);

  readonly form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  emailError(): string {
    const control = this.form.controls.email;

    if (!control.touched && !this.attempted()) {
      return '';
    }

    if (control.hasError('required')) {
      return 'Ingresa tu correo electrónico';
    }

    if (control.hasError('pattern')) {
      return 'Ingresa un correo electrónico válido';
    }

    return '';
  }

  passwordError(): string {
    const control = this.form.controls.password;

    if (!control.touched && !this.attempted()) {
      return '';
    }

    if (control.hasError('required')) {
      return 'Ingresa tu contraseña';
    }

    if (control.hasError('minlength')) {
      return 'La contraseña debe tener al menos 6 caracteres';
    }

    return '';
  }

  submit(): void {
    this.attempted.set(true);
    this.loginFailed.set(false);

    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.getRawValue();

    if (!this.auth.login(email, password)) {
      this.loginFailed.set(true);
      return;
    }

    const name = this.auth.firstName();
    this.close();
    this.ui.showToast(`¡Bienvenido a Jawitas, ${name}!`);
  }

  close(): void {
    this.ui.closeLogin();
    this.form.reset();
    this.attempted.set(false);
    this.loginFailed.set(false);
  }
}
