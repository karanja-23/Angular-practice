import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, MenuComponent, TableModule],
  template: `
    <section>
      <app-header></app-header>
      
      <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
  <ng-template pTemplate="header">
      <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
      </tr>
  </ng-template>
  
  <ng-template pTemplate="body" let-product>
      <tr>
          <td>{{ product.code }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.quantity }}</td>
      </tr>
  </ng-template>
</p-table>

      <router-outlet></router-outlet>
    </section>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPractice';
  products: any[] = [
    { code: 'f230fh0g3', name: 'Leaf Rake', category: 'Garden', quantity: 12 },
    { code: 'hv34j5', name: 'Saw', category: 'Tools', quantity: 20 },
  ];
}
