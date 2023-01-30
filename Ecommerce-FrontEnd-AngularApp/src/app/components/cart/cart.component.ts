import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
 localCartItem : any = [];
constructor(private cartService:CartService) { 
    
    
  }
  ngOnInit():void{

      this.cartService.getCartItem().subscribe(data=>{
      this.localCartItem=data;
      console.log("Data Fetched - ",data);
      });
  

  }
  
  postCartItem(data:any){
 
    return this.cartService.postCartItem(data).subscribe((data)=>{
      console.log("Data Sent - ",data);
      this.ngOnInit();
    })
  }

  deleteCartItem(){
    if(confirm('Are you sure to delete this item?'))
    return this.cartService.deleteCartItem().subscribe((response)=>{
      console.log("Data Deleted - ",response);
      alert("Item Deleted Succesfully")
      this.ngOnInit();
    })
  
}
}

 