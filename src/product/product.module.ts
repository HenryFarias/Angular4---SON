import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { AppHttpService } from '../app/app-http.service';
import { ProductViewComponent } from './product-view.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductNewComponent } from './product-new.component';
import { ProductRemoveComponent } from './product-remove.component';


const appRoutes: Routes = [
    {path: 'product', component: ProductComponent},
    {path: 'product/new', component: ProductNewComponent},
    {path: 'product/:id', component: ProductViewComponent},
    {path: 'product/:id/edit', component: ProductEditComponent},
    {path: 'product/:id/remove', component: ProductRemoveComponent},
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
    ],
    declarations: [
        ProductComponent,
        ProductViewComponent,
        ProductEditComponent,
        ProductNewComponent,
        ProductRemoveComponent,
    ],
    providers: [AppHttpService]
})

export class ProductModule {}