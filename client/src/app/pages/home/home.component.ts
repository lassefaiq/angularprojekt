import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3001/products')
      .subscribe({
        next: (data) => {
          console.log('Fetched products:', data); // ✅ Console log here
          this.products = data;
        },
        error: (err) => console.error('Error fetching products:', err)
      });
  }
}
