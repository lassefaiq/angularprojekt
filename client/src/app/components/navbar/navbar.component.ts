import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faHeart } from '@fortawesome/free-regular-svg-icons';

import { SearchService } from '../../services/search.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class NavbarComponent {
  searchTerm: string = '';

  // Direct icon bindings
  faSearch = faSearch;
  faSmile = faSmile;
  faHeart = faHeart;
  faShoppingBag = faShoppingBag;

  constructor(private router: Router, private searchService: SearchService) {}

  handleSearch(event: Event): void {
    event.preventDefault();

    const trimmed = this.searchTerm.trim();
    if (trimmed !== '') {
      this.searchService.setSearchTerm(trimmed);
      this.router.navigate(['/products'], { queryParams: { search: trimmed } });
    }
  }
}
