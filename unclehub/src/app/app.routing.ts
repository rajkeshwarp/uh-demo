
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { DealsComponent } from './deals/deals.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    { path: '', redirectTo: '/deals', pathMatch: 'full' },
    { path: 'deals', component: DealsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'product', component: ProductComponent },
    { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }