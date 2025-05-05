import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductDetailsComponent implements OnInit {
  product: any = null;
  similarProducts: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.fetchProduct(slug);
      }
    });
  }

  fetchProduct(slug: string): void {
    this.http.get<any>(`http://localhost:3001/products/slug/${slug}`).subscribe({
      next: (productData) => {
        this.product = productData;

        // fetch all products for "similar" section
        this.http.get<any[]>('http://localhost:3001/products').subscribe(allProducts => {
          const filtered = allProducts.filter(p => p.slug !== slug);
          const shuffled = filtered.sort(() => Math.random() - 0.5);
          this.similarProducts = shuffled.slice(0, 3);
        });
      },
      error: (err) => console.error('Error fetching product:', err)
    });
  }
}
