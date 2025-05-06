import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  standalone: true,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule 
  ]
})
export class AdminComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<any[]>('http://localhost:3001/products').subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  handleDelete(id: number): void {
    if (confirm('Är du säker på att du vill ta bort produkten?')) {
      this.http.delete(`http://localhost:3001/products/${id}`).subscribe({
        next: () => {
          this.products = this.products.filter(p => p.id !== id);
        },
        error: (err) => {
          console.error('Fel vid borttagning av produkt:', err);
          alert('Kunde inte ta bort produkten.');
        }
      });
    }
  }
}
