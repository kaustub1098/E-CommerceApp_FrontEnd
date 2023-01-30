import { Injectable } from '@angular/core';
import { Product } from './../common/product';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private httpClient:HttpClient){ }

public addProduct(product:any){
  return this.httpClient.post<Product>("http://localhost:3000/products/addNewProduct",product);
}
 public addToCart(productId:any){
  return this.httpClient.get("http://localhost:3000/products/addToCart" +productId);
 }
 public deleteProduct(productId:number){
  return this.httpClient.delete("http://localhost:3000/products/deleteProduct" +productId);
 }
}
