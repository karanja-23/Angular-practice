import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  template: `
    <section>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPractice';
}
