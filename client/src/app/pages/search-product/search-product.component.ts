import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SearchProductComponent implements OnInit {
  products: any[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.searchQuery = params.get('search') || '';
      this.fetchProducts();
    });
  }

  fetchProducts(): void {
    this.http.get<any[]>('http://localhost:3001/products').subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  get filteredProducts(): any[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
