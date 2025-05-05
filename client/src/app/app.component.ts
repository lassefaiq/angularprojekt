import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { library } from '@fortawesome/fontawesome-svg-core';

// ✅ Import only icons you actually use
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faSmile as farSmile } from '@fortawesome/free-regular-svg-icons';

// ✅ Add them to the library
library.add(faSearch, faShoppingBag, farHeart, farSmile);

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class AppComponent {
  constructor(public router: Router) {}

  isAdminPage(): boolean {
    return this.router.url.startsWith('/admin');
  }
}
