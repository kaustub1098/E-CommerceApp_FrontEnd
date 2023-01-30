import { CartService } from './../../services/cart.service';
import { Product } from 'src/app/common/product';
import { ProductService } from './../../services/product.service';
import { ProductListComponent } from './../product-list/product-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    
  }
 
}
