import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SearchProductComponent } from './pages/search-product/search-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProductService } from './services/product.service';
import { SearchService } from './services/search.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,

    // ✅ Import standalone components
    AppComponent,
    HomeComponent,
    AdminComponent,
    ProductDetailsComponent,
    SearchProductComponent,
    AddProductComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers: [ProductService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
