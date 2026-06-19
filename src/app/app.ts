import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
   email: string = '';
   password: string = '';

  constructor(private auth: Auth) {}
  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Login success:', res);
      },
      error: (err) => {
        console.log('Login failed:', err);
      }
    });
  }
}
