import { ProductService } from './services/product.service';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
//import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    //CartComponent,
    ProductComponent,
    HomePageComponent,
    ProductListComponent,
    

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
 ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
