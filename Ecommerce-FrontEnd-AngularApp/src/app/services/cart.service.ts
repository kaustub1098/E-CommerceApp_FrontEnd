import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
    constructor(private http:HttpClient) { }
  
  getCartItem(){
    
    let apiUrl = "http://localhost:3000/products";    
    return this.http.get(apiUrl);
  
  }
  postCartItem(value:any){
    
    return this.http.post('http://localhost:3000/products',value);
    
 }

  deleteCartItem(){
    return this.http.delete('http://localhost:3000/products/');
    
  }
  
}

 