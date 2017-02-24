import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ModalModule, TabsModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DealsComponent } from './deals/deals.component';
import { CartComponent } from './cart/cart.component';

import { AppRoutingModule } from './app.routing';
import { CheckoutComponent } from './checkout/checkout.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostItComponent } from './post-it/post-it.component';
import { DomSafePipe } from './safe.pipe';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DealsComponent,
    CartComponent,
    CheckoutComponent,
    SocialLoginComponent,
    LoginComponent,
    RegisterComponent,
    PostItComponent,
    DomSafePipe,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
