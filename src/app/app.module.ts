import { NgModule, LOCALE_ID } from '@angular/core';
import *as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



import { AppComponent } from './app.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { EShopComponent } from './components/e-shop/e-shop.component';
import { CompteComponent } from './components/compte/compte.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CartComponent } from './components/cart/cart.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductsComponent } from './components/products/products.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';
import { BorderComponent } from './components/border/border.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { CommandeComponent } from './components/commande/commande.component';
import { PanierComponent } from './components/panier/panier.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    FooterComponent,
    HomeComponent,
    GameComponent,
    EShopComponent,
    CompteComponent,
    NotFoundPageComponent,
    CartComponent,
    AsideComponent,
    ProductsComponent,
    ScrollBarComponent,
    BorderComponent,
    ButtonComponent,
    LoginComponent,
    CommandeComponent,
    PanierComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
