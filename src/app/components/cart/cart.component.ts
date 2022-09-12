import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { 
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = +this.cartService.getTotalPrice();
    });
  }


  // supprimer un produit //
  removeItem(productItem: any) {
    if(confirm('Es tu sure de supprimer ce produits '))
      this.cartService.removeCartItem(productItem);///
  }
 }
