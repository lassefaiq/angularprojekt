import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ]
})
export class AddProductComponent {
  formData = {
    name: '',
    description: '',
    image: '',
    sku: '',
    price: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  handleSubmit(): void {
    this.http.post('http://localhost:3001/products', this.formData).subscribe({
      next: () => {
        alert('Produkt tillagd!');
        this.router.navigate(['/admin']);
      },
      error: (err) => console.error(err)
    });
  }
}
