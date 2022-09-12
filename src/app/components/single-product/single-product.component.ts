import { CartService } from './../../services/cart.service';
import { ApiProductsService } from './../../services/api-products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product ! : any;
  productId ! : number;

  constructor(private api:ApiProductsService, private route: ActivatedRoute, private router: Router,private cartservice:CartService) { }

  ngOnInit(): void {
    const productId= +this.route.snapshot.params['id'];
    this.api.getProductId(this.productId).subscribe((res)=>{
      this.product = res;

    })
  }

  addToCart(product:any){
    this.cartservice.addToCart(product);
    this.router.navigateByUrl('/cart');
  }

}
