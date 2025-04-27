import { Component } from '@angular/core';
import { GreetingService } from '../greeting.service';
@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <main class="header">
      <div>
      <h1>Inventory</h1>
      </div>
      <div>
      <h2>{{greeting}}!</h2>

      </div>
    </main>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  greeting : string = "";
  constructor(private greetingService: GreetingService) {
    this.greeting = this.greetingService.getGreeting();
  }
}
