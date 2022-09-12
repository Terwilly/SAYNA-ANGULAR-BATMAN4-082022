import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  p: number = 1;
  public products: any;

  constructor(
    private api: ApiProductsService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.Prix });
      });
    });
  }

  addToCart(productItem: any) {
    this.cartService.addToCart(productItem);
    this.router.navigateByUrl('cart');
  }
}
