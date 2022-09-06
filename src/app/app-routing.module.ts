import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './components/compte/compte.component';
import { EShopComponent } from './components/e-shop/e-shop.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';
import { BorderComponent } from './components/border/border.component';
import { ButtonComponent } from './components/button/button.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'game', component:GameComponent},
  {path:'e-shop', component:EShopComponent},
  {path:'compte', component:CompteComponent},
  {path:'**', component:NotFoundPageComponent},
  {path:'cart', component:CartComponent},
  {path:'scroll-bar', component:ScrollBarComponent},
  {path:'border', component:BorderComponent},
  {path:'button', component:ButtonComponent},
  {path:'e-shop/product/:id', component:SingleProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
